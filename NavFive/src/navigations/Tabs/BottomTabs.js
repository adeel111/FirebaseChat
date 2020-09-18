import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from '../../navigations/Stacks/HomeStack';
import ProfileStack from '../../navigations/Stacks/ProfileStack';
import SettingsStack from '../../navigations/Stacks/SettingsStack';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabs(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        labelStyle: {fontSize: 14, fontWeight: '500'},
        labelPosition: 'below-icon',
        style: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
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
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
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
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
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

export default BottomTabs;
