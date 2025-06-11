import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import PendingTasksScreen from '../screens/PendingTasksScreen';

const Tab = createBottomTabNavigator();


const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="All">
        <Tab.Screen name="All" component={AllTasksScreen}/>
        <Tab.Screen name="Completed" component={CompletedTasksScreen}/>
        <Tab.Screen name="Pending" component={PendingTasksScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
