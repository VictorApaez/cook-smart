import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type SearchBarProps = {
  list: {name: string}[];
};

export const SearchBar: React.FC<SearchBarProps> = ({list}) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const listItems = useMemo(() => {
    return list.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
  }, [list, text]);

  const handleItemPress = (selectedItem: {name: string}) => {
    console.log('WTFFF');
    setText('');
    setIsFocused(false);
  };

  const testing = () => {
    console.log('WTFFFF');
    setIsFocused(false);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPressOut={() => {
        if (isFocused) {
          testing();
        }
      }}>
      <TextInput
        style={styles.input}
        placeholder="Search Category..."
        onChangeText={text => setText(text)}
        value={text}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused && listItems.length > 0 && (
        <View style={[styles.dropdown, {zIndex: 1}]}>
          {listItems.map((listItem, index) => (
            <TouchableWithoutFeedback
              onPress={() => handleItemPress(listItem)}
              key={listItem.name + index}>
              <View style={styles.dropdownItemContainer}>
                <FontAwesomeIcon name="search" />
                <Text style={styles.dropdownItem}>{listItem.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    zIndex: 100,
    margin: 19,
  },
  input: {
    padding: 5,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: '#CCC',
    borderRadius: 20,
  },
  dropdown: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCC',
    padding: 10,
    position: 'absolute',
    backgroundColor: 'white',
    top: '100%',
    width: `100%`,
    marginTop: 5,
  },
  dropdownItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItem: {
    padding: 10,
  },
});
