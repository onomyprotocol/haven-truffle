import { createStackNavigator } from 'react-navigation';
import AppTabNavigation from './AppTabNavigation';
import screens from './screens';

const routes = {
  [screens.App]: AppTabNavigation,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
