import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TagEditor} from './TagEditor';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const RecipePage: React.FC<any> = ({route}) => {
  const {recipe} = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [tagEditorVisible, setTagEditorVisible] = useState(false);
  const [tags, setTags] = useState(recipe.tags);

  const handleOpenTagEditor = () => {
    setTagEditorVisible(true);
  };

  const handleSelectTags = (selectedTags: string[]) => {
    setTags(selectedTags);
  };
  const handleEditRecipe = () => {
    console.log(recipe);
    navigation.navigate('CreateRecipe', {
      recipe: recipe,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{recipe.name}</Text>

          <TouchableOpacity
            onPress={handleEditRecipe}
            style={styles.editRecipeButton}>
            <FontAwesomeIcon name="edit" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient: [String], index: number) => (
            <View key={index} style={styles.bulletContainer}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Instructions</Text>
          <Text style={styles.text}>{recipe.instructions}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.tagsHeader}>
            <Text style={styles.subTitle}>Tags</Text>
            <TouchableOpacity
              onPress={handleOpenTagEditor}
              style={styles.editButton}>
              <Text>Edit Tags</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tagButtonsContainer}>
            {tags.map((tag: string, index: number) => (
              <Text key={index} style={styles.tagButton}>
                {tag}
              </Text>
            ))}
          </View>
        </View>

        <TagEditor
          visible={tagEditorVisible}
          onClose={() => setTagEditorVisible(false)}
          onSelectTags={handleSelectTags}
          existingTags={tags}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  editRecipeButton: {
    backgroundColor: '#6c757d',
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },

  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    margin: 10, // this is linked to the padding of container ^^
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  sectionContent: {
    padding: 20,
  },
  tagsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    width: 10,
    marginRight: 10,
    fontSize: 18,
    lineHeight: 24,
    color: '#666',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  tagButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagButton: {
    backgroundColor: '#42a3ff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    color: 'white',
  },
  editButton: {},
});
