import React, {useRef} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

export default function ObatDetail({route}) {
  const {obat} = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;

  const imageScale = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.8], // gambar mengecil
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -20], // judul bergerak naik
    extrapolate: 'clamp',
  });

  const descriptionOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.7], // deskripsi memudar sedikit
    extrapolate: 'clamp',
  });

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: true}
      )}
      scrollEventThrottle={16}
    >
      <Animated.Image
        source={
          obat.image ? obat.image : require('../../assets/image/default.jpg')
        }
        style={[styles.image, {transform: [{scale: imageScale}]}]}
        resizeMode="contain"
      />

      <Text style={styles.category}>
        Kategori {obat.category || 'Tidak diketahui'}
      </Text>

      <Animated.Text style={[styles.title, {transform: [{translateY: titleTranslateY}]}]}>
        {obat.name}
      </Animated.Text>

      <Animated.Text style={[styles.description, {opacity: descriptionOpacity}]}>
        {obat.detail || obat.description}
      </Animated.Text>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: '500',
    color: '#89AC46',
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#89AC46',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
  },
});
