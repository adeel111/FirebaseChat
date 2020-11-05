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

const VerifyCode = ({route}) => {
  const [code, setCode] = useState('');

  const handleVerification = async () => {
    const {confirm} = route.params;
    try {
      const res = await confirm.confirm(code);
      console.log('Code Verification Response');
      console.log(res);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.titleTextStyle}>Verification Code</Text>
        <View style={styles.inputViewContainer}>
          <TextInput
            placeholder={'Enter Code'}
            inputType="default"
            capitalize={'none'}
            onChangeText={(text) => {
              setCode(text);
            }}
            style={{padding: 10}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleVerification()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Verify Code</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default VerifyCode;

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
