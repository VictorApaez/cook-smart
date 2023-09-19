import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Recipe} from '../data/CategoriesData';

type StackParamList = {
  Categories: undefined;
  Recipes: undefined;
  RecipeDetail: {recipe: Recipe};
  CreateRecipe: undefined;
  SearchBar: {list: {name: string; recipes: {name: string}[]}[]};
  FavoriteRecipes: {recipes: Recipe[]; categoryType: string};
  Welcome: undefined;
  MainApp: undefined;
};

export type NavigationProp = NativeStackNavigationProp<StackParamList>;

export function useTypedNavigation() {
  return useNavigation<NavigationProp>();
}
