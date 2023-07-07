import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
import {
  createRepository,
} from '../../services/requests/repositories';

export default function CreateRepositoryPage({route}) {
  const [name, setName] = useState(route.params.name);
  const [date, setDate] = useState(route.params.date);
  const userId = route.params.userId;

  const navigation = useNavigation();

  async function create() {
    const response = await createRepository({
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
  return (
    <View style={styles.container}>
      <DefaultInput
        placeHolder={'Repository name'}
        searchValue={name}
        setSearchValue={setName}
      />
      <DefaultInput
        placeHolder={'Creation date'}
        searchValue={date}
        setSearchValue={setDate}
      />
      <DefaultButton name={'Create'} action={create} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
