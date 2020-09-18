import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
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

export default ProfileStack;
