import React, {useState} from 'react';

import {Text, ScrollView, StyleSheet} from 'react-native';
import {Recipe} from '../../data/CategoriesData';
import RecipesItem from './RecipesItem';
import {SearchBar} from '../../components/SearchBar';

interface RecipesPageProps {
  route?: any;
  recipes?: Recipe[];
  categoryType?: string;
}

const RecipesPage: React.FC<RecipesPageProps> = ({
  route,
  recipes: propRecipes,
  categoryType: propCategoryType,
}) => {
  // This component will accept recipes from either props or from the route object (navigation)
  const {recipes: routeRecipes, categoryType: routeCategoryType} =
    route?.params || {};
  const recipes = propRecipes || routeRecipes;
  const categoryType = propCategoryType || routeCategoryType;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categoryType}>{categoryType}</Text>
      <SearchBar list={recipes} />
      {recipes.map((recipe: Recipe, key: number) => (
        <RecipesItem recipe={recipe} id={key} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryType: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default RecipesPage;
