import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import {recipeTags} from './CategoriesData';

type TagEditorProps = {
  visible: boolean;
  onClose: () => void;
  onSelectTags: (tags: string[]) => void;
  existingTags: string[];
};

export const TagEditor: React.FC<TagEditorProps> = ({
  visible,
  onClose,
  onSelectTags,
  existingTags,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState(existingTags);

  const availableTags = recipeTags.filter(
    tag => tag.includes(searchQuery) && !selectedTags.includes(tag),
  );

  const handleTagPress = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const handleSave = () => {
    onSelectTags(selectedTags);
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search tags..."
          style={styles.searchInput}
        />
        <FlatList
          data={availableTags}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleTagPress(item)}
              style={styles.tagItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.selectedTagsContainer}>
          {selectedTags.map((tag: string, index: number) => (
            <View key={index} style={styles.tagButton}>
              <Text>{tag}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  searchInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  tagItem: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  selectedTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tagButton: {
    backgroundColor: '#3498DB',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  saveButton: {
    backgroundColor: '#27AE60',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
