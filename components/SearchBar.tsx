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

export const SearchBar: React.FC<SearchBarProps> = ({route}) => {
  const [text, setText] = useState('');
  const originalList = useMemo(() => route.params.list, [route.params.list]);
  const [list, setList] = useState(route.params.list);

  const handleItemPress = (selectedItem: {name: string}) => {
    setText('');
  };

  const handleOnChange = (text: string) => {
    setText(text);

    if (text === '') {
      setList(originalList);
    } else {
      const filteredList = originalList.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
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
            onPress={() => handleItemPress(listItem)}
            key={listItem.name + index}>
            <View style={styles.dropdownItemContainer}>
              <View style={styles.dropdownItemLeft}>
                <FontAwesomeIcon name="search" style={iconStyles.default} />
                <Text style={styles.dropdownItemText}>{listItem.name}</Text>
              </View>
              <FeatherIcon name="arrow-up-left" style={iconStyles.default} />
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  dropdownItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItemText: {
    padding: 10,
    fontSize: 20,
  },
});
