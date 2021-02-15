import React from 'react';
import {View, Modal, Pressable, Text, StyleSheet} from 'react-native';

const ModalResult = ({
  recipeTotalCalories,
  finalResult,
  modalEvent,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <View style={styles.centerView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onREquestClose={() => {
          modalEvent();
        }}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.result}>
              Por Porção: {finalResult.toFixed(1)}
            </Text>
            <Text style={styles.total}>
              Total da receita: {recipeTotalCalories.toFixed(1)}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    paddingLeft: 50,
    paddingRight: 50,
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
  result: {
    fontSize: 40,
  },
  total: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default ModalResult;
