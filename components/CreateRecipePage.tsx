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
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagEditorVisible, setTagEditorVisible] = useState(false);

  const handleOpenTagEditor = () => {
    setTagEditorVisible(true);
  };

  const handleSelectTags = (selectedTags: string[]) => {
    setTags(selectedTags);
  };

  const handleSubmit = () => {
    const formData = {
      ingredients,
      instructions,
      tags,
    };
    console.log('Submitted data:', formData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../images/pank.jpeg')} style={styles.image} />

        <View style={styles.section}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <TextInput
            value={ingredients}
            onChangeText={setIngredients}
            placeholder="Enter ingredients..."
            style={styles.textInput}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Instructions</Text>
          <TextInput
            value={instructions}
            onChangeText={setInstructions}
            placeholder="Enter instructions..."
            style={styles.textInput}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Tags</Text>
          {tags.map((tag, index) => (
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
          existingTags={tags}
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
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    minHeight: 100,
    textAlignVertical: 'top',
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
