import React, {useState} from 'react';
import {
  FlatList,
  View,
  Modal,
  Alert,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ResultItem from './ResultItem';

const SearchResult = ({searchList, addToRecipe}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState(0);

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
      <View style={styles.centerView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onREquestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Pressable style={styles.close}>
                <Icon
                  name="times"
                  style={styles.closeFont}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              </Pressable>
              <TextInput
                style={styles.textInput}
                keyboardType="number-pad"
                placeholder="Adicione a quantidade"
                value={quantity}
                onChangeText={(text) => setQuantity(text)}
              />
              <Pressable style={styles.button} onPress={getData(id, quantity)}>
                <Text style={styles.textStyle}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 22,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    textAlign: 'center',
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginTop: 10,
    backgroundColor: '#0161e8',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  close: {
    marginRight: -300,
    marginTop: -10,
  },
  closeFont: {
    fontSize: 30,
    color: '#cc2211',
  },
});

export default SearchResult;
