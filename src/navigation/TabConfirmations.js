import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { ConfirmationsTab, UserConfirmations } from '../screens';

const TabConfirmations = createStackNavigator(
  {
    [screens.ConfirmationsTab]: ConfirmationsTab,
    [screens.UserConfirmations]: UserConfirmations,
  },
  {
    headerMode: 'screen',
  },
);

export default TabConfirmations;
