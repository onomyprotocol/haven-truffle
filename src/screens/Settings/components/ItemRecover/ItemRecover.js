import React from 'react';
import { Touchable, Text } from '../../../../components';
import s from './styles';
import { t } from '../../../../i18n';
import { FlashCardIcon } from '../../../../components/icons';
import { NavigationService } from '../../../../services';

function ItemRecover() {
  return (
    <Touchable
      style={s.container}
      onPress={() => NavigationService.navigateToRecoveryHavenId()}
    >
      <Text medium style={s.text}>
        {t('settings.recoverHaven')}
      </Text>
      <FlashCardIcon />
    </Touchable>
  );
}

export default ItemRecover;
