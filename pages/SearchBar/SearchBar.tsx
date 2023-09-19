import {DropDownItems} from './DropDownItems';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchBarProps} from '../../components/AppNavigator';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {iconStyles} from '../../styles/commonStyles';

export const SearchBar: React.FC<SearchBarProps> = ({route}) => {
  const originalList = route.params.list;

  const [text, setText] = useState('');
  const [list, setList] = useState(originalList);

  const cleatInput = () => {
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
          if (category.name.toLowerCase().includes(text.toLowerCase()))
            return category;
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
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <FeatherIcon name="arrow-left" style={[iconStyles.default]} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search Category..."
          onChangeText={text => handleOnChange(text)}
          value={text}
        />
      </View>
      <View style={[styles.dropdown, {zIndex: 1}]}>
        {list.map((listItem: any, index: number) => (
          <DropDownItems
            listItem={listItem}
            clearInput={cleatInput}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {marginLeft: 15},
  input: {
    padding: 5,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: '#CCC',
    borderRadius: 20,
    margin: 10,
    width: '80%',
  },
  dropdown: {
    borderRadius: 10,
    borderTopWidth: 2,
    borderColor: '#CCC',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
    paddingLeft: 15,
  },
});
