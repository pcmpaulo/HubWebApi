import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import RepositoryCard from '../../components/RepositoryCard';
import { listRepositories } from '../../services/requests/repositories';

export default function RepositoriesPage({route}) {
  const [repositories, setRepositories] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      setLoaded(true);
      const results = await listRepositories(route.params.userId);
      setRepositories(results);
    }
    if (!loaded || isFocused) {
      loadData();
    }
  }, [isFocused, loaded, route.params.userId]);

  function createRepository() {
    navigation.navigate('create-repository', {userId: route.params.userId});
  }

  function repositoryDetail(repository) {
    navigation.navigate('repository-detail', repository);
  }

  return (
    <View style={styles.container}>
      <DefaultButton name={'Create new repository'} action={createRepository} />
      <FlatList
        data={repositories}
        style={{width: '100%'}}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RepositoryCard
            name={item.name}
            date={item.date}
            action={() => repositoryDetail(item)}
            item={item}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
