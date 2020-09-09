import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '500',
            fontStyle: 'italic',
            alignSelf: 'center',
          }}>
          Welcome to Splash
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Splash;
