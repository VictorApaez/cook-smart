import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

export const RecipePage: React.FC<any> = ({route}) => {
  const {recipe} = route.params;

  return (
    <ScrollView>
      <Text>{recipe.name}</Text>
    </ScrollView>
  );
};
