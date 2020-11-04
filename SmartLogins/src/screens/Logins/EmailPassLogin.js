import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const EmailPassLogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('User aigned in!');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.titleTextStyle}>EMAIL</Text>
        <View style={styles.inputViewContainer}>
          <TextInput
            placeholder={'abc@example.com'}
            inputType="email-address"
            capitalize={'none'}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={{padding: 10}}
          />
        </View>
        <Text style={styles.titleTextStyle}>PASSWORD</Text>
        <View style={styles.inputViewContainer}>
          <TextInput
            placeholder={'*********'}
            inputType="default"
            secureTextEntry
            capitalize={'none'}
            onChangeText={(text) => {
              setPass(text);
            }}
            style={{padding: 10}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleRegister()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleLogin()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleLogout()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default EmailPassLogin;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: '8%',
    color: 'gray',
    alignSelf: 'flex-start',
  },
  inputViewContainer: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: '85%',
    flexDirection: 'row',
    borderColor: 'gray',
  },
  buttonContainer: {
    width: '85%',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  buttonTextStyles: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
