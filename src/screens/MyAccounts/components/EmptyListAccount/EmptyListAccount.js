import React from 'react';
import { View } from 'react-native';

import { t } from '../../../../i18n';
import { LogoIcon } from '../../../../assets/svg';
import s from './styles';
import { Text } from '../../../../components';

function EmptyListAccount() {
  return (
    <View style={s.container}>
      <View style={s.containerImg}>
        <View style={s.containerLogo}>
          <LogoIcon />
        </View>
      </View>
      <Text style={s.text}>
        {t('SelectAccountToLogin.EmptyListAccount')}
      </Text>
    </View>
  );
}

export default EmptyListAccount;
