import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';
import MainNav from './src/navigations/MainNav';

const App = () => {
  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('Setup Successfully');
      });
    })();
  }, []);

  return (
    <>
      <MainNav />
    </>
  );
};

export default App;
