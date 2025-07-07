import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem, updateQuantity} from '../redux/cartSlice';
import {getThemedStyles} from '../appStyles';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const CartScreen = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  const renderItem = ({item}) => (
    <View
      style={[
        styles.item,
        {backgroundColor: theme === 'dark' ? '#222' : '#fff'},
      ]}>
      <View style={{flex: 1}}>
        <Text
          style={[styles.title, {color: theme === 'dark' ? '#fff' : '#000'}]}>
          {item.brand} {item.title}
        </Text>
        <Text style={{color: theme === 'dark' ? '#fff' : '#000'}}>
          Price: ${item.price}
        </Text>
        <Text style={{color: theme === 'dark' ? '#fff' : '#000'}}>
          Quantity: {item.quantity}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() =>
            dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}))
          }
          disabled={item.quantity <= 1}>
          <Text style={styles.actionBtn}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))
          }>
          <Text style={styles.actionBtn}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(removeItem(item.id))}>
          <Text style={[styles.actionBtn, {color: 'red'}]}>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={themedStyles.container}>
      <Text
        style={[styles.header, {color: theme === 'dark' ? '#fff' : '#000'}]}>
        Cart
      </Text>
      {cart.length === 0 ? (
        <Text
          style={{
            textAlign: 'center',
            marginTop: 40,
            color: theme === 'dark' ? '#fff' : '#000',
          }}>
          Your cart is empty
        </Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{padding: 16}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 12,
  },
  actionBtn: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
});

export default CartScreen;
