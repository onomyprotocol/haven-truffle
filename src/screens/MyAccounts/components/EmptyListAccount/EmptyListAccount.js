import React from 'react';
import { View } from 'react-native';
import { Text, AnimationQR } from '../../../../components';
import { t } from '../../../../i18n';
import s from './styles';

function EmptyListAccount() {
  return (
    <View style={s.container}>
      <View style={s.textContainer}>
        <Text semiBold style={s.title}>
          {t('myAccounts.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('myAccounts.textInfo')}
        </Text>
      </View>
      <AnimationQR withArrow />
    </View>
  );
}

export default EmptyListAccount;
