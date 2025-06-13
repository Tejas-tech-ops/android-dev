import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PendingTasksScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pending Tasks</Text>
    </View>
  );
};

export default PendingTasksScreen;

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
