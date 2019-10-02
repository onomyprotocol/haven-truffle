import { createStackNavigator } from 'react-navigation';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigator from './AuthNavigator';
import screens from './screens';

const routes = {
  [screens.Auth]: AuthNavigator,
  [screens.App]: AppTabNavigation,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
