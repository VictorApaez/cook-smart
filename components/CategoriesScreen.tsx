import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CarouselItem from './CarouselItem';
import {categories, SubCategory} from './CategoriesData';
import {fetchCategories} from '../redux/categories/categoriesThunks';
import {useAppDispatch, useAppSelector} from '../redux/store';

const CategoriesScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoriesStatus = useAppSelector(state => state.categories.status);
  const categoriesState = useAppSelector(state => state.categories);

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  if (categoriesStatus === 'loading') {
    return <Text>Loading</Text>;
  }

  if (categoriesStatus === 'failed') {
    return <Text>Failed</Text>;
  }

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
      data={categoriesState.categories}
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
