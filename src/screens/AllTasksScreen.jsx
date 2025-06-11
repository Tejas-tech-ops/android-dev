import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AllTasksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Tasks</Text>
    </View>
  );
};

export default AllTasksScreen;

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
