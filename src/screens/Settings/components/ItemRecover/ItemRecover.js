import React from 'react';
import { Touchable, Text } from '../../../../components';
import s from './styles';
import { t } from '../../../../i18n';
import { FlashCardIcon } from '../../../../assets/svg';
import { NavigationService } from '../../../../services';

function ItemRecover() {
  return (
    <Touchable
      style={s.container}
      onPress={() => NavigationService.goToRecoveryHavenId()}
    >
      <Text medium style={s.text}>
        {t('settings.recoverHaven')}
      </Text>
      <FlashCardIcon />
    </Touchable>
  );
}

export default ItemRecover;
