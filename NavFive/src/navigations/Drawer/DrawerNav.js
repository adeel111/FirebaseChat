import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// imports screens
import BottomTabs from '../../navigations/Tabs/BottomTabs';
import NotificationsStack from '../../navigations/Stacks/NotificationsStack';
import FriendsStack from '../../navigations/Stacks/FriendsStack';
import RequestsStack from '../../navigations/Stacks/RequestsStack';

import DrawerHeader from './DrawerHeader';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        itemStyle: {marginTop: 0},
        labelStyle: {fontSize: 16},
      }}
      drawerType="front"
      // hideStatusBar={true}
      drawerContent={(props) => <DrawerHeader {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          drawerIcon: ({focused}) => (
            <Entypo name="home" color={focused ? 'green' : 'grey'} size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsStack}
        options={{
          drawerIcon: ({focused}) => (
            <Ionicons
              name="notifications"
              color={focused ? 'green' : 'grey'}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Friends"
        component={FriendsStack}
        options={{
          drawerIcon: ({focused}) => (
            <Ionicons
              name="people"
              color={focused ? 'green' : 'grey'}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Requests"
        component={RequestsStack}
        options={{
          drawerIcon: ({focused}) => (
            <Ionicons
              name="ios-person-add"
              color={focused ? 'green' : 'grey'}
              size={20}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
