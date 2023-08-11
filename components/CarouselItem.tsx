import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {recipes} from './CategoriesData';

type CarouselItemProps = {
  item: {
    name: string;
    image: any;
  };
};

const CarouselItem: React.FC<CarouselItemProps> = ({item}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handlePress = () => {
    const categoryType = item.name;
    const recipesByType = recipes.filter(recipe =>
      recipe.tags.includes(categoryType),
    );
    navigation.navigate('Recipes', {
      recipes: recipesByType,
      categoryType: categoryType,
    });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.subCategory}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 10,
  },
  carouselItem: {
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  subCategory: {
    textAlign: 'center',
  },
});

export default CarouselItem;
