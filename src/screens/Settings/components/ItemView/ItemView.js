import React from 'react';
import { Touchable, Text } from '../../../../components';
import { LockIcon } from '../../../../assets/svg';
import { NavigationService } from '../../../../services';
import s from './styles';
import { t } from '../../../../i18n';

function ItemView() {
  return (
    <Touchable
      style={s.container}
      onPress={() => NavigationService.goToRecoveryWords()}
    >
      <Text medium style={s.text}>
        {t('settings.viewBackup')}
      </Text>
      <LockIcon />
    </Touchable>
  );
}

export default ItemView;
