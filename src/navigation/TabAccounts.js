import { createStackNavigator } from 'react-navigation';
import { defaultAppNavigationOptions } from './AppNavigator.helpers';
import screens from './screens';
import {
  MyAccounts,
  LoginHistory,
  CreateNewAccount,
} from '../screens';

const TabAccounts = createStackNavigator(
  {
    [screens.MyAccounts]: MyAccounts,
    [screens.LoginHistory]: LoginHistory,
    [screens.CreateNewAccount]: CreateNewAccount,
  },
  {
    initialRouteName: screens.MyAccounts,
    headerLayoutPreset: 'center',
    ...defaultAppNavigationOptions,
  },
);

export default TabAccounts;
