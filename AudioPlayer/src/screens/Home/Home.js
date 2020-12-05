import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.descTextStyle}>
        Which kind of music you{'\n'}to listen?
      </Text>
      <TouchableOpacity
        style={styles.buttonStyles}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('AudioFiles');
        }}>
        <Text style={styles.textStyle}>Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyles}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('VideoFiles');
        }}>
        <Text style={styles.textStyle}>Video</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
