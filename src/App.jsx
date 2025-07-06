import React from 'react';
import Navigation from './navigation/Navigation';
import {ThemeProvider} from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
