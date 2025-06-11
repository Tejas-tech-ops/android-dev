import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CompletedTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Completed Tasks Screen</Text>
    </View>
  );
};

export default CompletedTasksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});
