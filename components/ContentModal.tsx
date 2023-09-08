import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import {modalStyles} from '../styles/commonStyles';

type ContentModalTypes = {
  onClose: () => void;
  visible: boolean;
  children: React.ReactNode;
};

export const ContentModal: React.FC<ContentModalTypes> = ({
  onClose,
  visible,
  children,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={modalStyles.modalBackdrop}>
          <TouchableWithoutFeedback>
            <View style={modalStyles.modalContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
