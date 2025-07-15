import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {fetchServices} from '../api/api';
import ServiceList from '../components/ServiceList';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import homeScreenStyles from './homeScreenStyles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  const [tipAnim] = useState(new Animated.Value(-30));

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

  useEffect(() => {
    Animated.sequence([
      Animated.timing(tipAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(tipAnim, {
        toValue: -30,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.delay(300),
      Animated.timing(tipAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(tipAnim, {
        toValue: -30,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();
  }, [tipAnim]);

  const filteredServices = useMemo(() => {
    return services.filter(service =>
      service.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [services, search]);

  const handleSearchChange = useCallback(text => {
    setSearch(text);
  }, []);

  return (
    <SafeAreaView style={themedStyles.container}>
      <Animated.View style={[homeScreenStyles.menuTip, {left: tipAnim}]}>
        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
      </Animated.View>
      <Header title={'Hey, beautiful!'} />
      <View style={themedStyles.centered}>
        <SearchBar
          value={search}
          onChangeText={handleSearchChange}
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
