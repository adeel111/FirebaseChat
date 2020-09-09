import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  I18nManager,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import I18n from '../translation';

class Translator extends Component {
  state = {
    languageChange: false,
  };

  changeLang = async (lang) => {
    await AsyncStorage.setItem('lang', lang);
    I18n.locale = lang;
    I18nManager.forceRTL(false);
    this.setState({
      languageChange: true,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyles}>{I18n.t('language')}</Text>
        <Text style={styles.textStyles}>{I18n.t('welcomeNote')}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.changeLang('en')}
          style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.changeLang('fr')}
          style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>French</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.changeLang('pr')}
          style={styles.buttonStyles}>
          <Text style={styles.buttonTextStyles}>Portugal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Translator;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    color: '#00AEEF',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonStyles: {
    width: '80%',
    padding: 10,
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
    color: '#FFFFFF',
  },
});
