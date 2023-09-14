import {StyleSheet} from 'react-native';

export const modalStyles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    maxHeight: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flex: 1,
  },
});

export const colors = {
  primary: '#FF4757', // vibrant red
  secondary: '#2ECC71', // vibrant green
  accent: '#FFD700', // vibrant
  background: '#f0f0f0', // white
  textPrimary: '#333333', // Dark text color
  textSecondary: '#7F8C8D', // Secondary text color (grayish)
};

export const iconStyles = StyleSheet.create({
  edit: {
    fontSize: 20,
    color: 'black',
  },
  heart: {
    fontSize: 20,
    color: 'white',
  },
  default: {
    fontSize: 20,
    color: 'grey',
  },
});
