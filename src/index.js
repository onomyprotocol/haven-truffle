import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './navigation';
import {
  StatusBarService,
  AsyncStore,
  NavigationService,
} from './services';

function App() {
  useEffect(() => {
    const asyncFunc = async () => {
      const isFirst = !(await AsyncStore().getIsNotFirstInput());
      if (isFirst) {
        await NavigationService.navigateToOnboarding();
      } else {
        await NavigationService.navigateToApp();
      }
      await StatusBarService.init();
      await SplashScreen.hide();
    };
    asyncFunc();
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <Navigator />
    </View>
  );
}

export default App;
