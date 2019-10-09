import { createStackNavigator } from 'react-navigation';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigator from './AuthNavigator';
import screens from './screens';

const routes = {
  [screens.App]: AppTabNavigation,
  [screens.Auth]: AuthNavigator,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: screens.App,
});
