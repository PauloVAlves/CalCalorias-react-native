import React, {useState, useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SearchResult from './SearchResult';

const AddFood = () => {
  const {searchItem} = useContext(DataContext);
  const [searchString, setSearchString] = useState('');

  const onChange = (textValue) => {
    setSearchString(textValue);
  };

  const search = (searchString) => {
    if (!searchString) {
      Alert.alert('Erro', 'Informe o nome do alimento');
    } else {
      searchItem(searchString);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o nome do alimento"
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => search(searchString)}>
        <Text style={styles.btnText}>
          <Icon name="search" size={20} /> Procurar
        </Text>
      </TouchableOpacity>
      <SearchResult />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    height: 60,
    padding: 8,
    fontSize: 22,
  },

  btn: {
    backgroundColor: 'rgb(1, 97, 232)',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddFood;
