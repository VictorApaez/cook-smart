import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
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
    <TouchableOpacity style={styles.carouselItem} onPress={handlePress}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.subCategory}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: 'center',
    padding: 5,
    width: 150,
    overflow: 'hidden',
    margin: 5,
  },
  image: {
    width: 150,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 150,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  subCategory: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
