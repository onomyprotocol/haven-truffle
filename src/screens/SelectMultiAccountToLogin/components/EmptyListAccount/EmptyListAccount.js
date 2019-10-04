import React from 'react';
import { View, Text } from 'react-native';

import { t } from '../../../../i18n';
import { Logo } from '../../../../assets/svg';
import s from './styles';

function EmptyListAccount() {
  return (
    <View style={s.container}>
      <View style={s.containerImg}>
        <View style={s.containerLogo}>
          <Logo />
        </View>
      </View>
      <Text style={s.text}>
        {t('SelectAccountToLogin.EmptyListAccount')}
      </Text>
    </View>
  );
}

export default EmptyListAccount;
