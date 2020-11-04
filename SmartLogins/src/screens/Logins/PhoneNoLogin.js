import React from 'react';
import {Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';

const PhoneNoLogin = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textStyles}>Phone Number Login</Text>
      </SafeAreaView>
    </>
  );
};

export default PhoneNoLogin;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 24,
    fontWeight: '600',
  },
});
