import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';

const Multibanco = () => {
  handlePayment = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      amount: 100,
      currency: 'EUR',
      source: {
        type: 'multibanco',
        payment_country: 'PT',
        account_holder_name: 'Bruce Wayne',
        billing_descriptor: 'Multibanco Demo Payment',
      },
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
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => handlePayment()}
        style={styles.buttonStyles}>
        <Text style={styles.buttonTextStyles}>Pay with Multibanco</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Multibanco;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyles: {
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
  },
  buttonTextStyles: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
