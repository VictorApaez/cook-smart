import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type CarouselItemProps = {
  item: {
    subCategory: string;
    image: any;
  };
};

const CarouselItem: React.FC<CarouselItemProps> = ({item}) => (
  <View style={styles.carouselItem}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.subCategory}>{item.subCategory}</Text>
  </View>
);

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 10,
  },
  carouselItem: {
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  subCategory: {
    textAlign: 'center',
  },
});

export default CarouselItem;
