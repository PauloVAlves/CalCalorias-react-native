import React, {useState} from 'react';
import {FlatList, View, Alert, StyleSheet} from 'react-native';
import ModalQuantity from './ModalQuantity';
import ResultItem from './ResultItem';

const SearchResult = ({searchList, addToRecipe}) => {
  const [id, setId] = useState('');

  const openModal = (id) => {
    setModalVisible(true);
    setId(id);
  };

  const getData = (id, quantity) => {
    if (!quantity) {
      Alert.alert('Erro', 'Informe a quantidade');
    } else {
      addToRecipe(id, quantity);
      setQuantity(0);
      setModalVisible(!modalVisible);
      Alert.alert('Adicionado à receita');
    }
  };

  return (
    <View>
      <FlatList
        data={searchList}
        renderItem={({item}) => (
          <ResultItem
            item={item}
            addToRecipe={addToRecipe}
            openModal={openModal}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <ModalQuantity getData={getData} />
    </View>
  );
};

export default SearchResult;
