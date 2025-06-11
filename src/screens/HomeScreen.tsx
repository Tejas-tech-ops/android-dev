
import React from 'react';
import {  Button, View, Text, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>


const HomeScreen: React.FC<Props> = ({ navigation }) => {

    const handleNavigation = () => {
        console.log('Before navigating to ToDo screen');
        navigation.navigate('ToDo');
        console.log('After navigating to ToDo screen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the ToDo App</Text>
            <Button
                title="Go to ToDo List"
                onPress={handleNavigation}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
    },
});
