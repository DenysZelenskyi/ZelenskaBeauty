import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, ActivityIndicator, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {fetchServices} from '../api/api';
import ServiceList from '../components/ServiceList';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';
// import SCREENS from '../constants/SCREENS';

const HomeScreen = () => {
  // const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

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
    <SafeAreaView style={themedStyles.container}>
      <Header title={'Hey, beautiful!'} />
      <View style={themedStyles.centered}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a service"
        />
      </View>
      <View style={themedStyles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#007002" />
        ) : error ? (
          <Text style={themedStyles.text}>{error}</Text>
        ) : (
          <ServiceList services={filteredServices} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
