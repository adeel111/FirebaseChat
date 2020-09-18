import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Details from '../../screens/Home/Details';
import ProfileStack from '../../navigations/Stacks/ProfileStack';
import SettingsStack from '../../navigations/Stacks/SettingsStack';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

function TopTabs(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        // showIcon: true,
        style: {
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          borderWidth: 0,
        },
        indicatorStyle: {
          width: 0,
          height: 0,
          elevation: 0,
        },
        labelStyle: {fontSize: 13, fontWeight: '500'},
        style: {backgroundColor: 'white'},
        indicatorStyle: {backgroundColor: 'green'},
      }}>
      <Tab.Screen
        name="Chat"
        component={Details}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              color={focused ? 'green' : 'grey'}
              size={22}
              style={{marginTop: 3}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person"
              color={focused ? 'green' : 'grey'}
              size={23}
              style={{marginTop: 3}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Albums"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Albums',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="settings"
              color={focused ? 'green' : 'grey'}
              size={22}
              style={{marginTop: 3}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabs;
