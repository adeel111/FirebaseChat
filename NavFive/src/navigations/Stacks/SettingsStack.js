import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../../screens/Settings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function SettingsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => (
            <FontAwesome
              name="bars"
              color={'green'}
              size={22}
              style={{marginLeft: 15}}
              onPress={() => props.navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
