import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CarouselItem from './CarouselItem';
import {SubCategory} from './CategoriesData';
import {fetchCategories} from '../redux/categories/categoriesThunks';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {CreateCategoryModal} from './CreateCategoryModal';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {iconStyles} from '../styles/commonStyles';

const CategoriesScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
    <View>
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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon name="edit" style={iconStyles.edit} />
        </TouchableOpacity>
      </View>
      <CreateCategoryModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <FlatList
        style={styles.categoriesFlatList}
        data={categoriesState.categories}
        scrollEnabled={false}
        renderItem={({item}) =>
          renderSubCategories(item.subCategory, item.title)
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesFlatList: {
    flexGrow: 0,
    paddingLeft: 10,
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 30,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoriesScreen;
