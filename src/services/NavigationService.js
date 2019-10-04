import { NavigationActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationServices {
  constructor() {
    this.navigation = null;
  }

  init(ref) {
    if (this.navigation) return;

    this.navigation = ref;
  }

  navigate(route) {
    this.navigation.dispatch(NavigationActions.navigate(route));
  }

  goBack() {
    this.navigation.dispatch(NavigationActions.back());
  }

  navigateToUserConfirmations() {
    this.navigate({ routeName: screens.UserConfirmations });
  }
}

export default new NavigationServices();
