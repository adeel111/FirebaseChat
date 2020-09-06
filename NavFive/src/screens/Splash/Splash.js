import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Splash = () => {
  useEffect(() => {
    alert('clicked');
  }, []);

  return (
    <>
      <SafeAreaView>
        <Text>Welcome to Splash</Text>
      </SafeAreaView>
    </>
  );
};

export default Splash;
