import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

import {fetchServices} from '../api/api';
import {ActivityIndicator, Text} from 'react-native';
import ServiceList from '../components/ServiceList';

import styles from '../appStyles';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        setError('Failed to load services');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase()),
  );

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
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <ServiceList services={filteredServices} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
