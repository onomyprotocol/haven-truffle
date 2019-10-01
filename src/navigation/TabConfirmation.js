import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { Confirmation } from '../screens';

const TabConfirmation = createStackNavigator({
  [screens.Confirmation]: Confirmation,
});

export default TabConfirmation;
