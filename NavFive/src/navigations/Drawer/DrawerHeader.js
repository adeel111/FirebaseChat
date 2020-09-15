import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {nature, home} from '../../assets';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function DrawerHeader(props) {
  return (
    <SafeAreaView
      style={styles.mainContainer}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <ImageBackground
        style={styles.imageContainer}
        resizeMode={'cover'}
        source={nature}>
        <View style={styles.blurView}>
          <Image source={home} style={styles.userIcon} />
          <Text style={styles.largeText}>Nature is Awesome</Text>
          <Text style={[styles.largeText, {fontSize: 10, marginTop: 5}]}>
            Nature heals all the pain
          </Text>
        </View>
      </ImageBackground>

      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({color}) => <Entypo name="home" color={color} size={20} />}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color}) => (
              <Ionicons name="notifications" color={color} size={20} />
            )}
            label="Notifications"
            onPress={() => props.navigation.navigate('Notifications')}
          />
          <DrawerItem
            icon={({color}) => (
              <Ionicons name="people" color={color} size={20} />
            )}
            label="Friends"
            onPress={() => props.navigation.navigate('Friends')}
          />
          <DrawerItem
            icon={({color}) => (
              <Ionicons name="ios-person-add" color={color} size={20} />
            )}
            label="Requests"
            onPress={() => props.navigation.navigate('Requests')}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <MaterialIcons
          name="logout"
          color={'green'}
          size={24}
          onPress={() => alert('todo!')}
        />
      </View>
    </SafeAreaView>
  );
}

export default DrawerHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // marginTop: Platform.OS === 'ios' ? StatusBar.height : 0,
  },
  imageContainer: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
  },
  userIcon: {
    borderRadius: 70,
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  largeText: {
    fontSize: 17,
    marginTop: 10,
    color: 'white',
    marginLeft: 8,
    alignSelf: 'center',
  },
  logOutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 18,
    fontSize: 16,
    color: 'green',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  blurView: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    margin: 10,
    paddingTop: 10,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
