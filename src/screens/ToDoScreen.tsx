import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import BottomTabsNavigator from '../navigation/BottomTabsNavigator';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const ToDoScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Tasks">
        <Drawer.Screen name="Tasks" component={BottomTabsNavigator}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
    </Drawer.Navigator>
  );
};

export default ToDoScreen;
