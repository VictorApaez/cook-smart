import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CategoriesScreen from './CategoriesScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
