import React from 'react';
import {View, ScrollView, ImageBackground, StyleSheet} from 'react-native';

const Carousel = ({images}) => {
  return (
    <View style={styles.carouselContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <View key={index} style={styles.cardItem}>
            <ImageBackground
              style={styles.carouselImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={image.source}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  cardItem: {
    marginHorizontal: 5,
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default Carousel;
