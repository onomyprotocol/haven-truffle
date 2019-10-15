import { t } from '../../../../i18n';
import { screenKey } from '../../../../constants';
import { NavigationService } from '../../../../services';

export const helperButtonText = (key) => {
  switch (key) {
    case screenKey.ONBOARDING:
      return t('common.continue');
    case screenKey.ONBOARDING_2:
      return t('common.continue');
    case screenKey.SETTINGS:
      return t('common.done');
    default:
      return t('common.done');
  }
};

export const helperButtonPress = (key) => {
  switch (key) {
    case screenKey.ONBOARDING:
      return () => NavigationService.navigateToCheckBackupWords();
    case screenKey.ONBOARDING_2:
      return () =>
        NavigationService.navigateToAreYouSure({
          screenKey: screenKey.ONBOARDING_2,
        });
    case screenKey.SETTINGS:
      return () => {};
    default:
      return () => {};
  }
};
