import { t } from '../../i18n';
import { screenKey } from '../../constants';
import { NavigationService } from '../../services';

export const helperButtonText = (key) => {
  switch (key) {
    case screenKey.ONBOARDING_2:
      return t('areYouSure.safe');
    case screenKey.SETTINGS:
      return t('areYouSure.continue');
    default:
      return t('areYouSure.continue');
  }
};

export const helperTitleText = (key) => {
  switch (key) {
    case screenKey.ONBOARDING_2:
      return t('areYouSure.headerTitle');
    case screenKey.SETTINGS:
      return t('areYouSure.title');
    default:
      return t('areYouSure.title');
  }
};

export const helperInfoText = (key) => {
  switch (key) {
    case screenKey.ONBOARDING_2:
      return t('areYouSure.textInfoOnboarding2');
    case screenKey.SETTINGS:
      return t('areYouSure.textInfoSettings');
    default:
      return t('areYouSure.textInfoSettings');
  }
};

export const helperButtonPress = (key) => {
  switch (key) {
    case screenKey.ONBOARDING_2:
      return () =>
        NavigationService.navigateToCheckBackupWords({
          screenKey: screenKey.ONBOARDING_2,
        });
    case screenKey.SETTINGS:
      return () => {};
    default:
      return () => {};
  }
};
