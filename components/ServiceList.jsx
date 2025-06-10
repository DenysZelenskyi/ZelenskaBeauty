import React from 'react';
import ServiceCard from './ServiceCard';
import {FlatList} from 'react-native';
import styles from './serviceListStyle';

const ServiceList = ({services}) => {
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
          onPress={() => console.log(`${item.title} pressed`)}
        />
      )}
    />
  );
};

export default ServiceList;
