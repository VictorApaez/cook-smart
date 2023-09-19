import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {iconStyles} from '../../styles/commonStyles';
import {Recipe} from '../../data/CategoriesData';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';

type ItemProps = {
  listItem: {name: string; recipes: Recipe[]};
  clearInput: () => void;
};

export const DropDownItems: React.FC<ItemProps> = ({listItem, clearInput}) => {
  const navigation = useTypedNavigation();

  const handleItemPress = (selectedItem: any, type: string) => {
    if (type === 'recipe') {
      navigation.navigate('RecipeDetail', {recipe: selectedItem});
    }
    clearInput();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => handleItemPress(listItem, 'category')}>
      <View style={styles.dropdownItemContainer}>
        <View style={styles.dropdownItemCategory}>
          <View style={styles.dropdownCategoryLeft}>
            <FontAwesomeIcon name="search" style={iconStyles.default} />
            <Text style={styles.dropdownItemCategoryText}>{listItem.name}</Text>
          </View>
          <FeatherIcon name="arrow-up-left" style={iconStyles.default} />
        </View>

        {listItem.recipes && (
          <View style={styles.dropDownItemRecipes}>
            {listItem.recipes.map((recipe: Recipe) => (
              <TouchableWithoutFeedback
                onPress={() => handleItemPress(recipe, 'recipe')}>
                <View style={styles.dropDownItemRecipeContainer}>
                  <View style={styles.dropDownItemRecipeLeft}>
                    <FeatherIcon
                      name="corner-down-right"
                      style={iconStyles.default}
                    />
                    <Text style={styles.dropDownItemRecipeName}>
                      {recipe.name}
                    </Text>
                  </View>
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
  );
};

const styles = StyleSheet.create({
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
  dropdownItemCategoryText: {
    padding: 10,
    fontSize: 20,
  },
  dropDownItemRecipes: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  dropDownItemRecipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropDownItemRecipeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownItemRecipeName: {
    padding: 15,
    fontSize: 15,
  },
});
