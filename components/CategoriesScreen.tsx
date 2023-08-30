import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import CarouselItem from './CarouselItem';
import {categories, SubCategory} from './CategoriesData';

const {width: screenWidth} = Dimensions.get('window');

const CategoriesScreen: React.FC = () => {
  const renderSubCategories = (subCategory: SubCategory[], title: string) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <FlatList
        data={subCategory}
        renderItem={({item}) => <CarouselItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={160 + 10}
        snapToAlignment="start"
        decelerationRate="fast"
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => renderSubCategories(item.subCategory, item.title)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoriesScreen;
