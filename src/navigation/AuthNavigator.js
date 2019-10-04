import { createStackNavigator } from 'react-navigation';
import {
  SelectAccountToLogin,
  SelectMultiAccountToLogin,
} from '../screens';
import screens from './screens';

const routes = {
  [screens.SelectMultiAccountToLogin]: SelectMultiAccountToLogin,
  [screens.SelectAccountToLogin]: SelectAccountToLogin,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
});
