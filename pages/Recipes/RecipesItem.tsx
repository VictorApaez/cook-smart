import {Recipe, addTag, removeTag} from '../../data/CategoriesData';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';

const RecipesItem: React.FC<any> = ({recipe, id}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isFavorite, setIsFavorite] = useState(
    recipe.tags.includes('Favorite'),
  );

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', {recipe});
  };
  const handleAddFavorite = (id: number, tag: string = 'Favorite') => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      removeTag(id, tag);
    } else {
      addTag(id, tag);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleAddFavorite(recipe.id)}>
        <FontAwesomeIcon
          name="heart"
          style={[
            styles.icon,
            isFavorite ? styles.iconActive : styles.iconInactive,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        key={id}
        style={styles.recipeContainer}
        onPress={() => handleRecipePress(recipe)}>
        <View style={styles.imageContainer}>
          <Image source={recipe.image} style={styles.recipeImage} />
          <View style={styles.overlay} />
          <Text style={styles.recipeName}>{recipe.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipesItem;

const styles = StyleSheet.create({
  categoryType: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  container: {
    position: 'relative',
  },
  recipeContainer: {
    padding: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 20,
  },
  icon: {
    fontSize: 20,
  },
  iconInactive: {
    color: 'white',
  },
  iconActive: {
    color: 'red',
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
