import React, {useContext, useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedServiceCardStyles} from './serviceCardStyles';

const ServiceCard = React.memo(({title, price, image, onPress, style}) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedServiceCardStyles(theme);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const handlePressIn = useCallback(() => {
    scale.value = withSpring(0.95, {
      damping: 10,
      stiffness: 100,
    });
  }, [scale]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });
  }, [scale]);

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate(SCREENS.BOOKING, {
        service: {title, price, image},
      });
    }
  }, [onPress, navigation, title, price, image]);

  const imageSource =
    typeof image === 'string' && image.startsWith('http')
      ? {uri: image}
      : image;

  return (
    <Animated.View style={[animatedStyle]}>
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[themedStyles.card, style]}
        activeOpacity={1}>
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
    </Animated.View>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
