import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesPage from './RecipesPage';
import CategoriesScreen from './CategoriesScreen';
import {RecipePage} from './RecipePage';
import {CreateRecipePage} from './CreateRecipePage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Recipes" component={RecipesPage} />
      <Stack.Screen name="RecipeDetail" component={RecipePage} />
    </Stack.Navigator>
  );
}

function CreateRecipeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateRecipeDetail" component={CreateRecipePage} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CreateRecipeTab" component={CreateRecipeNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
