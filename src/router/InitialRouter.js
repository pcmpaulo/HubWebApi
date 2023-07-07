import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/Home';
import CreateRepositoryPage from '../pages/CreateRepository';
import RepositoriesPage from '../pages/Repositories';
import RepositoryDetailPage from '../pages/RepositoryDetail';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function InitialRouter({mainComponent = 'home'}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName={mainComponent}>
        <Stack.Screen name={'create-repository'} component={CreateRepositoryPage} />
        <Stack.Screen name={'home'} component={HomePage} />
        <Stack.Screen name={'repositories'} component={RepositoriesPage} />
        <Stack.Screen name={'repository-detail'} component={RepositoryDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default InitialRouter;
