import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        // alert('Setup Successfully');
        console.log('Setup Successfully');
      });
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello Audio Player</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
