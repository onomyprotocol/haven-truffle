import { NavigationActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationServices {
  _navigation = null;

  init(navigation) {
    if (this._navigation) {
      return;
    }

    this._navigation = navigation;
  }

  navigate(screen, params) {
    const route = { routeName: screen, params };

    this._navigation.dispatch(NavigationActions.navigate(route));
  }

  navigateToApp() {
    this.navigate(screens.App);
  }

  navigateToOnboarding() {
    this.navigate(screens.Onboarding);
  }

  navigateToOnboarding2() {
    this.navigate(screens.Onboarding2);
  }

  navigateToRecoveryWords(props) {
    this.navigate(screens.RecoveryWords, props);
  }

  navigateToRecoveryHavenId(props) {
    this.navigate(screens.RecoveryHavenId, props);
  }

  navigateToRecoverExistingAccount(params) {
    this.navigate(screens.RecoverExistingAccount, params);
  }

  navigateToAreYouSure(props) {
    this.navigate(screens.AreYouSure, props);
  }

  goBack() {
    this._navigation.dispatch(NavigationActions.back());
  }

  navigateToUserConfirmations() {
    this.navigate(screens.UserConfirmations);
  }

  navigateToScanQROrRecover(params) {
    this.navigate(screens.ScanQROrRecover, params);
  }

  navigateToSuccessfullyImported(params) {
    this.navigate(screens.SuccessfullyImported, params);
  }

  navigateToWelcomeOfficially(params) {
    this.navigate(screens.WelcomeOfficially, params);
  }

  navigateToAttention(params) {
    this.navigate(screens.Attention, params);
  }

  navigateToCheckBackupWords(params) {
    this.navigate(screens.CheckBackupWords, params);
  }

  navigateToFirstAccount() {
    this.navigate(screens.FirstAccount);
  }

  navigateToLoginHistory(params) {
    this.navigate(screens.LoginHistory, params);
  }

  navigateToQrScanner() {
    this.navigate(screens.QrScanner);
  }
}

export default new NavigationServices();
