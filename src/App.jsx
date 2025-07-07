import React from 'react';
import Navigation from './navigation/Navigation';
import {ThemeProvider} from './context/ThemeContext';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  </Provider>
);

export default App;
