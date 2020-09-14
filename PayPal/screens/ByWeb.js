import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import qs from 'qs';
import {WebView} from 'react-native-webview';

class App extends Component {
  state = {
    accessToken: null,
    approvalUrl: null,
    paymentId: null,
  };

  // rest api call to get access token
  getAccessToken = () => {
    var data = qs.stringify({
      grant_type: 'client_credentials',
    });
    var config = {
      method: 'post',
      url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic QVZqMWN1eHZvRE10Z25zNDI4dklLTUkxNVEyM29LYWpFV1ZUUm9FOXFPbnZrcEVhWXBHZW1IS0lYd1lyTzVsS3VYdUo3UHJnQXZieXozbnk6RUtyVjdSXzVaMFlNUE9LN0hRUXZFSVVzMnF4YkJ4dzJFcmtJQmRjWVRFbVlSVUl3OERWTjJLTlRPYXo5NGxQbVA4b3lFcGszNm9jRXZOTUg=',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        const token = response.data.access_token;
        // console.log(JSON.stringify(token));
        this.setState(
          {
            accessToken: token,
          },
          () => {
            console.log('access token success');
            this.handleTransaction();
          },
        );
      })
      .catch((error) => {
        console.log('access token error');
        console.log(error);
      });
  };

  handleTransaction = () => {
    let currency = '1.0'; // dollar

    // Data which will go in WebView for Transaction
    const params = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      transactions: [
        {
          amount: {
            total: currency,
            currency: 'USD',
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

    // rest api call to get payment id & approval url
    axios
      .post('https://api.sandbox.paypal.com/v1/payments/payment', params, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.accessToken}`,
        },
      })
      .then((response) => {
        const {id, links} = response.data;

        const approvalUrl = links.find((data) => data.rel == 'approval_url');
        console.log('id, links Success');
        this.setState({
          paymentId: id,
          approvalUrl: approvalUrl.href,
        });
      })
      .catch((err) => {
        console.log('id, links error');
        console.log({...err});
      });
  };

  _onNavigationStateChange = (webViewState) => {
    if (webViewState.url.includes('https://example.com/')) {
      this.setState({
        approvalUrl: null,
      });

      // const {PayerID, paymentId} = webViewState.url;
      const extractURL = webViewState.url;

      // getting paymentId & PayerID from string (form of link)
      const res = extractURL.split('=');
      const paymentId = res[1].slice(0, -6);
      const PayerID = res[3];

      axios
        .post(
          `https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,
          {payer_id: PayerID},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.state.accessToken}`,
            },
          },
        )
        .then((response) => {
          console.log('done payment success');
          console.log(response);
        })
        .catch((err) => {
          console.log('done payment error');
          console.log({...err});
        });
    }
  };

  render() {
    const {approvalUrl} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        {approvalUrl ? (
          <WebView
            style={{height: 400, width: 300}}
            source={{uri: approvalUrl}}
            onNavigationStateChange={(webViewState) =>
              this._onNavigationStateChange(webViewState)
            }
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator
                size="large"
                color={'Blue'}
                style={{marginTop: 10}}
              />
            )}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.getAccessToken()}
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
