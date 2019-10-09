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

  goToRecoveryWords(props) {
    this.navigate(screens.RecoveryWords, props);
  }

  goToRecoveryHavenId(props) {
    this.navigate(screens.RecoveryHavenId, props);
  }

  goToAreYouSure(props) {
    this.navigate(screens.AreYouSure, props);
  }

  goBack() {
    this._navigation.dispatch(NavigationActions.back());
  }

  navigateToUserConfirmations() {
    this.navigate({ routeName: screens.UserConfirmations });
  }
}

export default new NavigationServices();
