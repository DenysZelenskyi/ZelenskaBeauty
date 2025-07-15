import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../redux/userSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BASE_URL = 'https://6864ae0f5b5d8d03397de22c.mockapi.io/api/v1';

const ProfileScreen = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [editingField, setEditingField] = useState(null); // 'firstName' | 'lastName' | 'phone' | null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSave = async () => {
    setError('');
    setSuccess('');
    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      // Проверка уникальности телефона, если он изменился
      if (editingField === 'phone' && phone !== user.phone) {
        const res = await fetch(
          `${BASE_URL}/users?phone=${encodeURIComponent(phone)}`,
        );
        const users = await res.json();
        // Фильтруем по точному совпадению и исключаем текущего пользователя
        const existingUsers = users.filter(
          u => u.phone === phone && u.id !== user.id,
        );
        if (existingUsers.length > 0) {
          setError('A user with this phone number already exists');
          setLoading(false);
          return;
        }
      }
      // PATCH запрос на обновление пользователя
      const res = await fetch(`${BASE_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({firstName, lastName, phone}),
      });
      if (!res.ok) throw new Error('Failed to update profile');
      const updatedUser = await res.json();
      dispatch(updateUser(updatedUser));
      setSuccess('Profile updated successfully');
      setEditingField(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (label, value, setValue, fieldKey) => (
    <View style={{marginBottom: 20}}>
      <Text style={{marginBottom: 4}}>{label}</Text>
      {editingField === fieldKey ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 8,
              flex: 1,
              marginRight: 8,
            }}
            autoFocus
            editable={!loading}
            keyboardType={fieldKey === 'phone' ? 'phone-pad' : 'default'}
          />
          <Button
            title={loading ? 'Saving...' : 'Save'}
            onPress={handleSave}
            disabled={loading}
          />
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{value}</Text>
          <TouchableOpacity
            onPress={() => setEditingField(fieldKey)}
            style={{marginLeft: 8}}>
            <MaterialIcons name="edit" size={22} color="#007002" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 24}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 24}}>
          Account
        </Text>
        {renderField('First Name', firstName, setFirstName, 'firstName')}
        {renderField('Last Name', lastName, setLastName, 'lastName')}
        {renderField('Phone', phone, setPhone, 'phone')}
        {!!error && (
          <Text style={{color: '#FF3B30', marginBottom: 8}}>{error}</Text>
        )}
        {!!success && (
          <Text style={{color: 'green', marginBottom: 8}}>{success}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
