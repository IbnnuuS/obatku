import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Notification, Setting} from 'iconsax-react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Notification size="20" color="#ffff" />
      </TouchableOpacity>
      <Text style={styles.brand}>ObatKu</Text>
      <TouchableOpacity>
        <Setting size="20" color="#ffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#89AC46',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  brand: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Navbar;
