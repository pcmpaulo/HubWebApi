import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
import {
  deleteRepository,
  updateRepository,
} from '../../services/requests/repositories';
export default function RepositoryDetailPage({route}) {
  const [name, setName] = useState(route.params.name);
  const [date, setDate] = useState(route.params.date);
  const [userId, setUserId] = useState(route.params.userId);
  const [id, setId] = useState(route.params.id);

  const navigation = useNavigation();

  async function saveRepository() {
    const response = await updateRepository(id, {
      id: id,
      name: name,
      date: date,
      userId: userId,
    });
    if (!response) {
      Alert.alert('Error', 'Error updating repository');
    } else {
      Alert.alert('Registro atualizado');
      navigation.goBack();
    }
  }
  async function deleteSelectedRepository() {
    const response = await deleteRepository(id);
    if (!response) {
      Alert.alert('Error', 'Error deleting repository');
    } else {
      Alert.alert('Registro deletado');
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <DefaultInput
        placeHolder={'Repository name'}
        searchValue={name}
        setSearchValue={setName}
      />
      <DefaultInput
        placeHolder={'Update date'}
        searchValue={date}
        setSearchValue={setDate}
      />
      <DefaultButton name={'Save'} action={saveRepository} />
      <DefaultButton name={'Delete'} action={deleteSelectedRepository} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
