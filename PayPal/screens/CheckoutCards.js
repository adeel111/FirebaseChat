import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {CreditCardInput} from 'react-native-credit-card-input';
import {CheckoutModule} from '@wedoogift/react-native-checkout-payment';

const CheckoutCards = () => {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    CheckoutModule.initialize(
      'pk_test_c800941e-32c1-499c-891a-3246f9cfcb16',
      'sandbox',
    )
      // or 'live' instead of 'sandbox' for production env.
      .then(() => {
        console.log('Initialization is done.');
      });
  }, []);

  _onChange = (formData) => {
    // this data can be used for futher process.
    // console.log(formData.values);
    setData({data: formData.values});
  };

  _onFocus = (field) => {
    console.log('focusing', field);
  };

  getAccessToken = () => {
    const numbstr = data.data.number;
    const str = data.data.expiry.split('/');
    const expMonth = str[0];
    const expYear = str[1];
    const number = numbstr.replace(/ /g, ''); // remove all white spaces

    CheckoutModule.generateToken({
      card: number,
      name: data.data.name,
      expiryMonth: expMonth,
      expiryYear: expYear,
      cvv: data.data.cvc,
    })
      .then((result) => {
        setToken(result.id);
        console.log('Card token is ' + result.id);
        handlePayment(result.id);
      })
      .catch((error) => {
        console.log('Entered all valid data');
        console.log(error);
        console.warn('Failed because: ' + error.message);
      });
  };

  handlePayment = (cardToekn) => {
    var axios = require('axios');
    var data = JSON.stringify({
      source: {
        type: 'token',
        token: cardToekn,
        // number: '5199992312641465',
        // expiry_month: 8,
        // expiry_year: 2025,
        // name: 'Sarah Mitchell',
        // cvv: '010',
      },
      //   25 means 0.25 so send 2500 for 25 USD
      amount: 2500,
      currency: 'USD',
      //   reference: 'ORD-5023-4E89',
    });

    var config = {
      method: 'post',
      url: 'https://api.sandbox.checkout.com/payments',
      headers: {
        Authorization: 'sk_test_e96655ff-4ab3-46e4-a8ff-bf48f760a6e0',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        const res = response.data.approved;
        if (res) {
          alert('success');
          console.log('success response => ' + res);
        } else {
          alert('failed');
          console.log('failed response => ' + res);
          console.log('Enter all valid data');
        }
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert('error');
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CreditCardInput
        autoFocus
        requiresName
        requiresCVC
        requiresPostalCode
        labelStyle={styles.label}
        inputStyle={styles.input}
        allowScroll
        inputContainerStyle={styles.inputContainer}
        validColor={'black'}
        invalidColor={'red'}
        placeholderColor={'darkgray'}
        onFocus={_onFocus}
        onChange={_onChange}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => getAccessToken()}
        style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>Pay with Cards</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutCards;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: 'blue',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
  buttonStyles: {
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginTop: '20%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#444444',
  },
  buttonTextStyles: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
