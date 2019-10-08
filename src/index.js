import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './navigation';
import { StatusBarService } from './services';

function App() {
  useEffect(() => {
    StatusBarService.init();
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Navigator />
    </View>
  );
}

export default App;
