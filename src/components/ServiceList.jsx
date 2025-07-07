import React, {useCallback} from 'react';
import ServiceCard from './ServiceCard';
import {FlatList} from 'react-native';
import styles from './serviceListStyle';

const ServiceList = React.memo(({services, onPress}) => {
  const renderItem = useCallback(
    ({item}) => (
      <ServiceCard
        title={item.title}
        price={item.price}
        image={item.image}
        brand={item.brand}
        onPress={onPress ? () => onPress(item) : undefined}
      />
    ),
    [onPress],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <FlatList
      data={services}
      keyExtractor={keyExtractor}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={renderItem}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={6}
    />
  );
});

ServiceList.displayName = 'ServiceList';

export default ServiceList;
