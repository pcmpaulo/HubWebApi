import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import {useNavigation} from '@react-navigation/native';
import { retrieveUser } from '../../services/requests/users';

export default function HomePage() {
  const [user, setUser] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();

  async function search() {
    const retrievedUser = await retrieveUser(searchValue);

    if (retrievedUser) {
      setUser(retrievedUser);
    } else {
      setUser({});
      Alert.alert('User not found.');
    }
    setSearchValue('');
  }

  async function navigateRepositoryList() {
    navigation.navigate('repositories', {userId: user.id});
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.followers}</Text>
        <Text>{user.following}</Text>
      </View>
      <DefaultInput
        placeHolder={'Search a user'}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <DefaultButton name={'Search'} action={search} />
      <DefaultButton name={'See repositories'} action={navigateRepositoryList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userContainer: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
