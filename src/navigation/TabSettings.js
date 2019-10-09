import { createStackNavigator } from 'react-navigation';
import { defaultAppNavigationOptions } from './AppNavigator.helpers';
import screens from './screens';
import {
  Settings,
  RecoveryWords,
  RecoveryHavenId,
  AreYouSure,
} from '../screens';

const TabSettings = createStackNavigator(
  {
    [screens.RecoveryWords]: RecoveryWords,
    [screens.Settings]: Settings,
    [screens.RecoveryHavenId]: RecoveryHavenId,
    [screens.AreYouSure]: AreYouSure,
  },
  {
    initialRouteName: screens.Settings,
    headerLayoutPreset: 'center',
    ...defaultAppNavigationOptions,
  },
);

export default TabSettings;
