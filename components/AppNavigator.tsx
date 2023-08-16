import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesPage from './RecipesPage';
import CategoriesScreen from './CategoriesScreen';
import {RecipePage} from './RecipePage';
import {CreateRecipePage} from './CreateRecipePage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="Recipes" component={RecipesPage} />
      <Stack.Screen name="Recipe" component={RecipePage} />
    </Stack.Navigator>
  );
}

function CreateRecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateRecipe" component={CreateRecipePage} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="CreateRecipe" component={CreateRecipeStack} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
