import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Recipe} from './CategoriesData';

const RecipePage: React.FC<any> = ({route}) => {
  const {recipes, categoryType} = route.params;
  console.log(categoryType);
  return (
    <ScrollView>
      <Text style={styles.categoryType}>{categoryType}</Text>
      {recipes.map((recipe: Recipe, key: number) => (
        <View key={key} style={styles.recipeContainer}>
          <View style={styles.imageContainer}>
            <Image source={recipe.image} style={styles.recipeImage} />
            <View style={styles.overlay} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryType: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  recipeContainer: {
    padding: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  recipeName: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
  },
});

export default RecipePage;
