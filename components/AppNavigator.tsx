import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipesPage from './RecipesPage';
import CategoriesScreen from './CategoriesScreen';
import {RecipePage} from './RecipePage';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="Recipes" component={RecipesPage} />
      <Stack.Screen name="Recipe" component={RecipePage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
