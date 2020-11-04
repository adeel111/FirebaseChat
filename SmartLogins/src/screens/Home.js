import React, {useEffect} from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';

const Home = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '964693322223-3agd4u4lrso3b1lqv97ac5a132gvi1gs.apps.googleusercontent.com',
    });
  }, []);
  // 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
  // A5:57:73:50:2E:9A:F1:DC:B0:54:3C:89:3C:99:E2:E5:54:8F:FB:F4
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textStyles}>Email Login</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EmailPassLogin')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Email</Text>
        </TouchableOpacity>
        <Text style={styles.textStyles}>Social Logins</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('GoogleLogin')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('FacebookLogin')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('AppleLogin')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Apple</Text>
        </TouchableOpacity>

        <Text style={styles.textStyles}>Phone Login</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PhoneNoLogin')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Phone</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
  textStyles: {
    fontSize: 24,
    margin: 20,
    fontWeight: '600',
    fontStyle: 'italic',
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
