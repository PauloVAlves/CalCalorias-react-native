import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import {DataContext} from '../data/DataContext';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View, Text} from 'react-native';
import Header from './Header';
import RecipeScreen from './RecipeScreen';
import SearchFood from './SearchFood';
import TableFood from './TableFood';
import LottieView from 'lottie-react-native';

const Tab = createMaterialTopTabNavigator();
const NavScreen = () => {
  const {error, isLoaded} = useContext(DataContext);
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (!isLoaded) {
    return (
      <View style={styles.lottie}>
        <LottieView
          source={require('../assets/24703-food-animation.json')}
          autoPlay
          loop
        />
      </View>
    );
  } else {
    return (
      <NavigationContainer style={styles.container}>
        <Header />
        <Tab.Navigator>
          <Tab.Screen name="Procurar" component={SearchFood} />
          <Tab.Screen name="Receita" component={RecipeScreen} />
          <Tab.Screen name="Tabela" component={TableFood} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    textAlign: 'center',
    marginTop: 200,
    fontSize: 30,
    color: '#cc2222',
  },
  brand: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 45,
  },
  lottie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavScreen;
