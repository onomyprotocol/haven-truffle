import { NavigationActions } from 'react-navigation';

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
}

export default new NavigationServices();
