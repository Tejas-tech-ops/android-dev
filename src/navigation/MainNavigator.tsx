import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ToDoScreen from '../screens/ToDoScreen';



export type RootStackParamList = {
    Home: undefined;
    ToDo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ToDo" component={ToDoScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigator;
