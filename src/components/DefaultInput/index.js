import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
export default function DefaultInput({
  placeHolder,
  searchValue,
  setSearchValue,
}) {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeHolder}
      autoCapitalize="none"
      value={searchValue}
      onChangeText={setSearchValue}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ededed',
    padding: 10,
    borderRadius: 8,
    borderColor: '#0F0F0F',
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  buttonText: {
    color: '#e6e6e6',
    fontSize: 16,
  },
});
