import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './serviceCardStyles';

const ServiceCard = ({title, price, image, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
