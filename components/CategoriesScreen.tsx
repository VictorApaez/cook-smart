import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';
import {categories} from './CategoriesData';
import {Category, SubCategory} from './CategoriesData';

const {width: screenWidth} = Dimensions.get('window');

const CategoriesScreen: React.FC = () => {
  const renderItem = ({item}: {item: Category}) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Carousel
        data={item.data}
        renderItem={({item}) => <CarouselItem item={item} />}
        sliderWidth={screenWidth}
        itemWidth={160}
        activeSlideAlignment={'start'}
      />
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
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
  },
});

export default CategoriesScreen;
