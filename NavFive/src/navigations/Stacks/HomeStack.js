import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';
import Details from '../../screens/Home/Details';
import TopTabs from '../../navigations/Tabs/TopTabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              {/*Donute Button Image */}
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  tintColor: 'green',
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={TopTabs}
        options={{
          title: 'Details',
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <Ionicons
              name="settings"
              color={'green'}
              size={22}
              style={{marginRight: 10}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
