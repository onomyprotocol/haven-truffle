import { createStackNavigator } from 'react-navigation';
import { SelectAccountToLogin } from '../screens';
import screens from './screens';

const routes = {
  [screens.SelectAccountToLogin]: SelectAccountToLogin,
};

export default createStackNavigator(routes);
