import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';
import {BannerView} from 'react-native-fbads';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> {Config.API_URL} </Text>
        <BannerView
          placementId="YOUR_BANNER_PLACEMENT_ID"
          type="standard"
          onPress={() => console.log('click')}
          onLoad={() => console.log('loaded')}
          onError={(err) => console.log('error', err)}
        />
      </SafeAreaView>
    );
  }
}

export default App;
