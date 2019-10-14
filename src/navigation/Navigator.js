import { createSwitchNavigator } from 'react-navigation';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigator from './AuthNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import Onboarding2Navigator from './Onboarding2Navigator';
import screens from './screens';
import { Empty } from '../components';

const routes = {
  [screens.Empty]: Empty,
  [screens.App]: AppTabNavigation,
  [screens.Auth]: AuthNavigator,
  [screens.Onboarding]: OnboardingNavigator,
  [screens.Onboarding2]: Onboarding2Navigator,
};

export default createSwitchNavigator(routes, {
  initialRouteName: screens.Empty,
});
