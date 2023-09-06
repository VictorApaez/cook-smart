import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesPage from './RecipesPage';
import CategoriesScreen from './CategoriesScreen';
import {RecipePage} from './RecipePage';
import {CreateRecipePage} from './CreateRecipeScreen';
import {WelcomeScreen} from './WelcomeScreen';

const RootStack = createNativeStackNavigator(); // Create a Root Stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Recipes" component={RecipesPage} />
      <Stack.Screen name="RecipeDetail" component={RecipePage} />
      <Stack.Screen name="CreateRecipe" component={CreateRecipePage} />
    </Stack.Navigator>
  );
}

function CreateRecipeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateRecipe" component={CreateRecipePage} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyle,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('HomeTab', {screen: 'Categories'});
          },
        })}
      />
      <Tab.Screen
        name="CreateRecipeTab"
        component={CreateRecipeNavigator}
        options={{
          tabBarLabel: 'Create Recipe',
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="MainApp" component={MainTabNavigator} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;

const tabBarStyle = {
  backgroundColor: '#000',
  activeTintColor: '#fff',
  inactiveTintColor: '#ccc',
};
