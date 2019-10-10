import { createStackNavigator } from 'react-navigation';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigator from './AuthNavigator';
import screens from './screens';
import { ScanQROrRecover } from '../screens';

const routes = {
  [screens.App]: AppTabNavigation,
  [screens.Auth]: AuthNavigator,
  [screens.ScanQROrRecover]: ScanQROrRecover,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: screens.ScanQROrRecover,
});
