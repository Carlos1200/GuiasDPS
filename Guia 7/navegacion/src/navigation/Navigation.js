import React from 'react';
import {Home} from '../screens/Home';
import {About} from '../screens/About';
import {Contact} from '../screens/Contact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navigation=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{title:'Home'}}/>
      <Tab.Screen name="about" component={About} options={{title:'About'}}/>
      <Tab.Screen name="contact" component={Contact} options={{title:'Contact'}}/>
    </Tab.Navigator>
  );
}
export default Navigation;


