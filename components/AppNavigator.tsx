import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipePage from './RecipePage';
import CategoriesScreen from './CategoriesScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="Recipe" component={RecipePage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
