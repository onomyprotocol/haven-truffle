import { createStackNavigator } from 'react-navigation';
import {
  ImportExistingAccounts,
  SuccessfullyImported,
  RecoveryWords,
  CheckBackupWords,
  AreYouSure,
} from '../screens';
import screens from './screens';

const routes = {
  [screens.ImportExistingAccounts]: ImportExistingAccounts,
  [screens.SuccessfullyImported]: SuccessfullyImported,
  [screens.RecoveryWords]: RecoveryWords,
  [screens.CheckBackupWords]: CheckBackupWords,
  [screens.AreYouSure]: AreYouSure,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  initialRouteName: screens.ImportExistingAccounts,
});
