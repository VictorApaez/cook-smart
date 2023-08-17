import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import {TagEditor} from './TagEditor';

export const CreateRecipePage: React.FC = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    tags: [] as string[],
  });

  const [tagEditorVisible, setTagEditorVisible] = useState(false);

  const handleOpenTagEditor = () => {
    setTagEditorVisible(true);
  };

  const handleSelectTags = (selectedTags: string[]) => {
    setRecipe(prevState => ({...prevState, tags: selectedTags}));
  };

  const handleSubmit = () => {
    console.log('Submitted data:', recipe);
  };

  const handleTextChange = (fieldName: keyof typeof recipe) => {
    return (text: string) => {
      setRecipe(prevState => ({...prevState, [fieldName]: text}));
    };
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../images/pank.jpeg')} style={styles.image} />

        <View style={styles.section}>
          <Text style={styles.subTitle}>Name</Text>
          <TextInput
            value={recipe.name}
            onChangeText={handleTextChange('name')}
            placeholder="Enter a name..."
            style={styles.textInputSingleLine}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <TextInput
            value={recipe.ingredients}
            onChangeText={handleTextChange('ingredients')}
            placeholder="Enter ingredients..."
            style={styles.textInputMultiLine}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Instructions</Text>
          <TextInput
            value={recipe.instructions}
            onChangeText={handleTextChange('instructions')}
            placeholder="Enter instructions..."
            style={styles.textInputMultiLine}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Tags</Text>
          {recipe.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
          <Button title="Edit Tags" onPress={handleOpenTagEditor} />
        </View>

        <Button title="Submit Recipe" onPress={handleSubmit} />

        <TagEditor
          visible={tagEditorVisible}
          onClose={() => setTagEditorVisible(false)}
          onSelectTags={handleSelectTags}
          existingTags={recipe.tags}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 50,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textInputMultiLine: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  textInputSingleLine: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
  tag: {
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default CreateRecipePage;
