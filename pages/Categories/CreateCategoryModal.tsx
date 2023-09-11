import React, {useState} from 'react';
import {Text, StyleSheet, Modal, Button} from 'react-native';
import {ContentModal} from '../../components/ContentModal';

interface CreateCategoryModalProps {
  onClose: () => void;
  modalVisible: boolean;
}

export const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({
  onClose,
  modalVisible,
}) => {
  return (
    <ContentModal onClose={onClose} visible={modalVisible}>
      <Text style={styles.modalText}>Create a New Category</Text>
      <Button title="Close" onPress={onClose} />
    </ContentModal>
  );
};
const styles = StyleSheet.create({
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
