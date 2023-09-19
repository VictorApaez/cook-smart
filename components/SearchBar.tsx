import React, {useState, useMemo} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {iconStyles} from '../styles/commonStyles';
import {SearchBarProps} from './AppNavigator';
import {useTypedNavigation} from '../hooks/useTypedNavigation';
import {Recipe} from '../data/CategoriesData';

export const SearchBar: React.FC<SearchBarProps> = ({route}) => {
  const originalList = route.params.list;

  const [text, setText] = useState('');
  const [list, setList] = useState(originalList);
  const navigation = useTypedNavigation();

  const handleItemPress = (selectedItem: any, type: string) => {
    if (type === 'recipe') {
      navigation.navigate('RecipeDetail', {recipe: selectedItem});
    }
    setText('');
  };

  const handleOnChange = (text: string) => {
    setText(text);

    if (text === '') {
      setList(originalList);
    } else {
      const filteredList = originalList
        .map(category => {
          const filteredRecipes = category.recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(text.toLowerCase()),
          );

          return {
            ...category,
            recipes: filteredRecipes,
          };
        })
        .filter(
          category =>
            category.recipes.length > 0 ||
            category.name.toLowerCase().includes(text.toLowerCase()),
        );

      setList(filteredList);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Category..."
        onChangeText={text => handleOnChange(text)}
        value={text}
      />
      <View style={[styles.dropdown, {zIndex: 1}]}>
        {list.map((listItem: any, index: number) => (
          <TouchableWithoutFeedback
            onPress={() => handleItemPress(listItem, 'category')}
            key={listItem.name + index}>
            <View style={styles.dropdownItemContainer}>
              <View style={styles.dropdownItemCategory}>
                <View style={styles.dropdownCategoryLeft}>
                  <FontAwesomeIcon name="search" style={iconStyles.default} />
                  <Text style={styles.dropdownItemText}>{listItem.name}</Text>
                </View>
                <FeatherIcon name="arrow-up-left" style={iconStyles.default} />
              </View>
              {listItem.recipes && (
                <View style={styles.dropDownItemRecipes}>
                  {listItem.recipes.map((recipe: Recipe) => (
                    <TouchableWithoutFeedback
                      onPress={() => handleItemPress(recipe, 'recipe')}>
                      <View style={styles.dropDownItemRecipeContainer}>
                        <Text style={styles.dropDownItemRecipe}>
                          {recipe.name}
                        </Text>
                        <FeatherIcon
                          name="arrow-up-left"
                          style={iconStyles.default}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 5,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: '#CCC',
    borderRadius: 20,
    margin: 10,
  },
  dropdown: {
    borderRadius: 10,
    borderTopWidth: 2,
    borderColor: '#CCC',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
  },
  dropdownItemContainer: {
    flexDirection: 'column',
  },
  dropdownItemCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownCategoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItemText: {
    padding: 10,
    fontSize: 20,
  },
  dropDownItemRecipes: {
    flexDirection: 'column',
    marginLeft: 40,
  },
  dropDownItemRecipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropDownItemRecipe: {
    padding: 10,
    fontSize: 15,
  },
});
