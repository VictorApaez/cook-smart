import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
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

  const handleTagRemove = (tag: string) => {
    const newTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newTags);
  };

  const handleSave = () => {
    onSelectTags(selectedTags);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.selectedTagsContainer}>
                {selectedTags.map((tag: string, index: number) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleTagRemove(tag)}
                    style={styles.tagButton}>
                    <Text style={styles.tagButtonText}>{tag}</Text>
                    <Text style={styles.tagButtonRemoveText}>×</Text>
                  </TouchableOpacity>
                ))}
              </View>

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
                    <Text style={styles.tagItemText}>{item}</Text>
                    <Text style={styles.tagItemText}>+</Text>
                  </TouchableOpacity>
                )}
              />

              <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center', // Center the modal vertically
    alignItems: 'center', // Center the modal horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: '90%', // Take up 90% of screen width
    maxHeight: '80%', // Take up max of 80% of screen height
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
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
  addTagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  tagItem: {
    backgroundColor: '#3FBEFF',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagItemText: {
    color: 'white',
  },
  selectedTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  tagButton: {
    backgroundColor: '#FE6F3F',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  tagButtonText: {
    color: 'white',
  },
  tagButtonRemoveText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
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
