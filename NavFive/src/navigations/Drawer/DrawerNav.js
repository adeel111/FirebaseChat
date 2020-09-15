import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// imports screens
import HomeStack from '../../navigations/Stacks/HomeStack';
import NotificationsStack from '../../navigations/Stacks/NotificationsStack';
import FriendsStack from '../../navigations/Stacks/FriendsStack';
import RequestsStack from '../../navigations/Stacks/RequestsStack';

import DrawerHeader from './DrawerHeader';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'green',
        itemStyle: {marginVertical: 0},
      }}
      drawerContent={(props) => <DrawerHeader {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} />
      <Drawer.Screen name="Friends" component={FriendsStack} />
      <Drawer.Screen name="Requests" component={RequestsStack} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
