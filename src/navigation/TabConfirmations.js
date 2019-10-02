import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { ConfirmationsTab } from '../screens';

const TabConfirmations = createStackNavigator({
  [screens.ConfirmationsTab]: ConfirmationsTab,
});

export default TabConfirmations;
