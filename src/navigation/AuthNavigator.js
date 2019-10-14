import { createStackNavigator } from 'react-navigation';
import {
  SelectAccountToLogin,
  SelectMultiAccountToLogin,
  Welcome,
  RecoverExistingAccount,
  WelcomeOfficially,
  CheckBackupWords,
  Attention,
  FirstAccount,
  ScanQROrRecover,
  AreYouSure,
  SuccessfullyImported,
  ImportExistingAccounts,
} from '../screens';
import screens from './screens';

const routes = {
  [screens.SelectMultiAccountToLogin]: SelectMultiAccountToLogin,
  [screens.SelectAccountToLogin]: SelectAccountToLogin,
  [screens.Welcome]: Welcome,
  [screens.RecoverExistingAccount]: RecoverExistingAccount,
  [screens.WelcomeOfficially]: WelcomeOfficially,
  [screens.CheckBackupWords]: CheckBackupWords,
  [screens.Attention]: Attention,
  [screens.FirstAccount]: FirstAccount,
  [screens.ScanQROrRecover]: ScanQROrRecover,
  [screens.AreYouSure]: AreYouSure,
  [screens.SuccessfullyImported]: SuccessfullyImported,
  [screens.ImportExistingAccounts]: ImportExistingAccounts,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  initialRouteName: screens.ScanQROrRecover,
});
