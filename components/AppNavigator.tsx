import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesPage from './RecipesPage';
import CategoriesScreen from './CategoriesScreen';
import {RecipePage} from './RecipePage';
import {CreateRecipePage} from './CreateRecipeScreen';
import {WelcomeScreen} from './WelcomeScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome.js';
import {View} from 'react-native';
import {recipes} from './CategoriesData';

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

function FavoritesNavigator() {
  const favoriteRecipes = recipes.filter(recipe => {
    return recipe.tags.find(tag => tag === 'Favorite');
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteRecipes"
        component={RecipesPage}
        initialParams={{recipes: favoriteRecipes, categoryType: 'Favorites'}}
      />
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
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="home" size={size} color={color} />
          ),
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
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                borderRadius: size * 2.5,
                backgroundColor: 'black',
                width: size * 2.5,
                height: size * 2.5,
                borderWidth: 3,
                borderColor: color,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: -size,
              }}>
              <FontAwesomeIcon name="plus" size={size * 1.5} color={color} />
            </View>
          ),
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="heart" size={size} color={color} />
          ),
          tabBarLabel: 'Favorites',
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
  borderTopWidth: 3,
  borderTopColor: '#ccc',
  height: 60,
};
