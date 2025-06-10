import React from 'react';
import {SafeAreaView, View} from 'react-native';

// import Header from './components/Header';

import MainButton from './components/MainButton';

// import ServiceList from './components/ServiceList';
// import {services} from './data/servicesData';

import styles from './appStyles';
// import InputField from './components/InputField';

// import SearchBar from './components/SearchBar';

const App = () => {
  // const [phone, setPhone] = useState('');
  // const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title={'Hey, beautiful!'} />
      <View style={styles.centered}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a service"
        />
      </View>
      <View style={styles.container}>
        <ServiceList services={services} />
      </View> */}

      {/* <View style={styles.centered}>
        <InputField
          placeholder="Phone number"
          value={phone}
          onChangeText={setPhone}
        />
      </View> */}

      <View style={styles.centered}>
        <MainButton title="Login" />
      </View>
    </SafeAreaView>
  );
};

export default App;
