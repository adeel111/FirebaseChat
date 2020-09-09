import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home'; // bottom tabs
import Notifications from '../../screens/Notifications';
import Friends from '../../screens/Friends';
import Requests from '../../screens/Requests';

import DrawerHeader from './DrawerHeader';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerHeader {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Friends" component={Friends} />
      <Drawer.Screen name="Requests" component={Requests} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
