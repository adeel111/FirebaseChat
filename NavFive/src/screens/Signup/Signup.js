import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';

const Signup = (props) => {
  const replaceScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textStyles}>Welcome to Sign Up</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => replaceScreen('Login')}
          style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>SIGN UP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: '500',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  buttonStyles: {
    width: '80%',
    padding: 12,
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
    fontWeight: '500',
    color: 'white',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
});
