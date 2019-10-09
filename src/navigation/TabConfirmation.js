import { createStackNavigator } from 'react-navigation';
import { defaultAppNavigationOptions } from './AppNavigator.helpers';
import screens from './screens';
import { Confirmation } from '../screens';

const TabConfirmation = createStackNavigator(
  {
    [screens.Confirmation]: Confirmation,
  },
  {
    ...defaultAppNavigationOptions,
  },
);

export default TabConfirmation;
