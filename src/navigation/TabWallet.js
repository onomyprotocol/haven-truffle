import { createStackNavigator } from 'react-navigation';
import { defaultAppNavigationOptions } from './AppNavigator.helpers';
import screens from './screens';
import { WalletTab } from '../screens';

const TabWallet = createStackNavigator(
  {
    [screens.WalletTab]: WalletTab,
  },
  {
    initialRouteName: screens.WalletTab,
    headerLayoutPreset: 'center',
    ...defaultAppNavigationOptions,
  },
);

export default TabWallet;
