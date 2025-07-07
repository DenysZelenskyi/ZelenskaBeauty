import React, {useEffect, useState, useContext, useCallback} from 'react';
import {SafeAreaView, View, ActivityIndicator, Text, Alert} from 'react-native';
import {fetchProducts} from '../api/api';
import ServiceList from '../components/ServiceList';
import {getThemedStyles} from '../appStyles';
import {ThemeContext} from '../context/ThemeContext';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/cartSlice';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';

const ShopScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = useCallback(
    product => {
      dispatch(addItem(product));
      Alert.alert('Added to cart', `${product.title} by ${product.brand}`);
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={themedStyles.container}>
      <Header
        title="Shop"
        showCart
        leftLabel="Services"
        onLeftPress={() => navigation.navigate('Home')}
        showThemeSwitch={false}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#007002" />
      ) : error ? (
        <Text style={themedStyles.text}>{error}</Text>
      ) : (
        <ServiceList services={products} onPress={handleAddToCart} />
      )}
    </SafeAreaView>
  );
};

export default ShopScreen;
