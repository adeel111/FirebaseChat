import React, {useEffect} from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '725460327047-7lnlc5lqlu7t3im635r14h6hhtgqgq2v.apps.googleusercontent.com',
    });
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN IN CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY SERVICES NOT AVAILABLE');
      } else {
        console.log('Else Part');
        console.log(error);
        console.log(error.message);
      }
    }
  };

  const fbLogin = () => {
    alert('Facebook login');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textStyles}>
          Social Logins without {'\n'} Firebase
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => googleLogin()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => fbLogin()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Facebook</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
  textStyles: {
    fontSize: 24,
    margin: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
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

export default App;
