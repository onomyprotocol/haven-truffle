import { screenKey } from '../../constants';
import { NavigationService } from '../../services';

export const helperButtonPress = (key) => {
  switch (key) {
    case screenKey.ONBOARDING:
      return () => NavigationService.navigateToFirstAccount();
    case screenKey.ONBOARDING_2:
      return () => NavigationService.navigateToApp();
    default:
      return () => {};
  }
};
