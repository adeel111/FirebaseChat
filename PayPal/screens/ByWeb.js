import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  WebView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class App extends Component {
  state = {
    accessToken: null,
    approvalUrl: null,
    paymentId: null,
  };

  handleTransaction = () => {
    alert('clicked');
    let currency = '1 USD';
    currency.replace(' USD', '');

    // Data which will go in WebView for Transaction
    const dataDetail = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      transactions: [
        {
          amount: {
            total: currency,
            currency: 'THB',
            details: {
              subtotal: currency,
              tax: '0',
              shipping: '0',
              handling_fee: '0',
              shipping_discount: '0',
              insurance: '0',
            },
          },
        },
      ],
      redirect_urls: {
        return_url: 'https://example.com',
        cancel_url: 'https://example.com',
      },
    };
    // rest api call to get access token

    const postmanToken =
      'A21AALRx7UaqPqeboFwQZ8bWyeg5Hq1ktyUq3mHPCCFVRKVwsn1dgzuaI0jK1u33-MLOAlzl4ZMkbDazz8p_BN880dHuQqZqA';
    axios
      .post(
        'https://api.sandbox.paypal.com/v1/oauth2/token',
        JSON.stringify({grant_type: 'client_credentials'}),
        {
          headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${postmanToken}`,
          },
        },
      )
      .then((response) => {
        alert(response.data.access_token);
        this.setState({
          accessToken: response.data.access_token,
        });

        return;

        // rest api call to get access token payment id & approval url
        axios
          .post(
            'https://api.sandbox.paypal.com/v1/payments/payment',
            dataDetail,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.accessToken}`,
              },
            },
          )
          .then((response) => {
            const {id, links} = response.data;
            const approvalUrl = links.find(
              (data) => data.rel == 'approval_url',
            );

            this.setState({
              paymentId: id,
              approvalUrl: approvalUrl.href,
            });
          })
          .catch((err) => {
            console.log({...err});
          });
      })
      .catch((error) => {
        alert('error for you, headache');
        console.log(error.response.request._response);
      });
  };

  render() {
    const {approvalUrl} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        {approvalUrl ? (
          <WebView
            style={{height: 400, width: 300}}
            source={{uri: approvalUrl}}
            onNavigationStateChange={this._onNavigationStateChange}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={false}
            style={{marginTop: 20}}
          />
        ) : (
          // <ActivityIndicator />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.handleTransaction()}
            style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>Pay with PayPal</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyles: {
    width: '80%',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#444444',
  },
  buttonTextStyles: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
