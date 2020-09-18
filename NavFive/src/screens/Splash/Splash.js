import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      // place code to check either user is logged in or not to decide to move
      // on AuthNav or AppNave.

      // replace ==> Splash screen will not appear again after pressing back button.
      props.navigation.replace('Auth');
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
