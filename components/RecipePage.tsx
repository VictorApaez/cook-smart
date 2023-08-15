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

export const RecipePage: React.FC<any> = ({route}) => {
  const {recipe} = route.params;

  const [tagEditorVisible, setTagEditorVisible] = useState(false);
  const [tags, setTags] = useState(recipe.tags);

  const handleOpenTagEditor = () => {
    setTagEditorVisible(true);
  };

  const handleSelectTags = (selectedTags: string[]) => {
    setTags(selectedTags);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Image source={recipe.image} style={styles.image} />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 16,
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
