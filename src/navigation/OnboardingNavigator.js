import { createStackNavigator } from 'react-navigation';
import {
  Welcome,
  ScanQROrRecover,
  RecoverExistingAccount,
  Attention,
  RecoveryWords,
  CheckBackupWords,
  FirstAccount,
  WelcomeOfficially,
} from '../screens';
import screens from './screens';

const routes = {
  [screens.Welcome]: Welcome,
  [screens.ScanQROrRecover]: ScanQROrRecover,
  [screens.RecoverExistingAccount]: RecoverExistingAccount,
  [screens.Attention]: Attention,
  [screens.RecoveryWords]: RecoveryWords,
  [screens.CheckBackupWords]: CheckBackupWords,
  [screens.FirstAccount]: FirstAccount,
  [screens.WelcomeOfficially]: WelcomeOfficially,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  initialRouteName: screens.Welcome,
});
