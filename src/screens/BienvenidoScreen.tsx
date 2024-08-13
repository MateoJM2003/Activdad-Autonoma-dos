import React from 'react';
import { Button, Text, View, Image, StyleSheet,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appestilo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BienvenidoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Division')}>
      <Image source={{ uri: 'https://jsconf.uy/wp-content/uploads/2021/11/aplicaciones-web-2.jpg' }} style={styles.image} />
      </TouchableOpacity>
          </View>
  );
};

export default BienvenidoScreen;
