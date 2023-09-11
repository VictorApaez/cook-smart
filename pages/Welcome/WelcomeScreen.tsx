import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate('MainApp', {
      screen: 'HomeTab',
      params: {screen: 'Categories'},
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>CookSmart</Text>
      <Text style={styles.quote}>Discover. Cook. Savor.</Text>

      <TouchableOpacity style={styles.proceedButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>

      <Text style={styles.info}>
        Experience the joy of cooking with CookSmart. Join us and find your next
        favorite recipe!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 40,
    color: '#555',
  },
  proceedButton: {
    backgroundColor: '#f05956',
    padding: 15,
    width: '100%',
    borderRadius: 8,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
});
