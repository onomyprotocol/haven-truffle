import { createStackNavigator } from 'react-navigation';
import { defaultAppNavigationOptions } from './AppNavigator.helpers';
import screens from './screens';
import { MyAccounts, LoginHistory } from '../screens';

const TabAccounts = createStackNavigator(
  {
    [screens.MyAccounts]: MyAccounts,
    [screens.LoginHistory]: LoginHistory,
  },
  {
    initialRouteName: screens.MyAccounts,
    headerLayoutPreset: 'center',
    ...defaultAppNavigationOptions,
  },
);

export default TabAccounts;
