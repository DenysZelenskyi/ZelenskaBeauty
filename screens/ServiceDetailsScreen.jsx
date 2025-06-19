import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ServiceDetailsScreen = ({route}) => {
  const {service} = route.params;

  return (
    <View style={styles.container}>
      <Image source={service.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.price}>{service.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#888',
  },
});

export default ServiceDetailsScreen;
