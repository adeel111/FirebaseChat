import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../../screens/Settings';

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
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
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
    </Stack.Navigator>
  );
}

export default SettingsStack;
