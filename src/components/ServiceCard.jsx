import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './serviceCardStyles';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';

const ServiceCard = ({title, price, image, onPress, style}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate(SCREENS.BOOKING, {
        service: {title, price, image},
      });
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.card, style]}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
