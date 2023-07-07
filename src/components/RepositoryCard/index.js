import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
export default function RepositoryCard({name, date, action, item}) {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {},
  date: {},
});
