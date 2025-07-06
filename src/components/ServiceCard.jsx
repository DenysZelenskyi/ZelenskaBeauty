import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedServiceCardStyles} from './serviceCardStyles';

const ServiceCard = ({title, price, image, onPress, style}) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedServiceCardStyles(theme);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate(SCREENS.BOOKING, {
        service: {title, price, image},
      });
    }
  };

  const imageSource =
    typeof image === 'string' && image.startsWith('http')
      ? {uri: image}
      : image;

  return (
    <TouchableOpacity onPress={handlePress} style={[themedStyles.card, style]}>
      <Image
        source={{uri: image}}
        style={themedStyles.image}
        resizeMode="cover"
      />
      <View style={themedStyles.content}>
        <Text style={themedStyles.title}>{title}</Text>
        <Text style={themedStyles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
