import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import {modalStyles} from '../styles/commonStyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome.js';

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
            <View style={modalStyles.modalContainer}>
              <FontAwesomeIcon
                name="times-circle"
                size={30}
                color="#000"
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  color: '#ED2939',
                  zIndex: 10,
                }}
                onPress={onClose}
              />
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
