import React from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const FBLogin = () => {
  const handleFBLogin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      console.log('User cancelled the login process');
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      console.log('Something went wrong obtaining access token');
    }
    // Make Graph Request to get User's information
    getUserData(data.accessToken);
  };

  const getUserData = async (token) => {
    const profileReqParams = {
      fields: {
        string:
          'id, cover, name, first_name, last_name, email, age_range, link, gender, locale, picture, timezone, updated_time, verified',
      },
    };
    const profileReq = new GraphRequest(
      '/me',
      {
        token,
        parameters: profileReqParams,
      },
      (error, results) => {
        if (results) {
          console.log('Facebook Response');
          console.log(results);
        } else {
          console.log('Error');
          console.log(error);
        }
      },
    );
    new GraphRequestManager().addRequest(profileReq).start();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textStyles}>
          Facebook Login without {'\n'} Firebase
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleFBLogin()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Login</Text>
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

export default FBLogin;
