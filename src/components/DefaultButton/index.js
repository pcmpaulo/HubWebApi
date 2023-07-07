import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function DefaultButton({ name, action, color }) {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#484c7d',
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  buttonText: {
    color: '#e6e6e6',
    fontSize: 16,
  },
});
