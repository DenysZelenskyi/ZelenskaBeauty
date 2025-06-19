import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import Header from '../components/Header';
import ServiceList from '../components/ServiceList';
import {services} from '../data/servicesData';
import SearchBar from '../components/SearchBar';

import styles from '../appStyles';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Hey, beautiful!'} />
      <View style={styles.centered}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a service"
        />
      </View>
      <View style={styles.container}>
        <ServiceList services={services} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
