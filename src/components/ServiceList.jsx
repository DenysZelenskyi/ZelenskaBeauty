import React from 'react';
import ServiceCard from './ServiceCard';
import {FlatList} from 'react-native';
import styles from './serviceListStyle';

const ServiceList = ({services, onPress}) => {
  return (
    <FlatList
      data={services}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({item}) => (
        <ServiceCard
          title={item.title}
          price={item.price}
          image={item.image}
          brand={item.brand}
          onPress={onPress ? () => onPress(item) : undefined}
        />
      )}
    />
  );
};

export default ServiceList;
