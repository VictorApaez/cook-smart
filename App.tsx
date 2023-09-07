import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './components/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
