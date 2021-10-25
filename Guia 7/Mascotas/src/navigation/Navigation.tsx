import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Cats from '../screens/Cats';
import Dog from '../screens/Dog';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: '#E5DCC3'}}>
      <Tab.Screen
        name="Dog"
        component={Dog}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="paw" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cat"
        component={Cats}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="pencil" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
