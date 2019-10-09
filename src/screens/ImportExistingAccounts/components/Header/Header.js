import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../../components';
import { t } from '../../../../i18n';
import s from './styles';

function Header() {
  return (
    <View style={s.topTextContainer}>
      <Text semiBold style={s.title}>
        {t('ImportExistingAccounts.title')}
      </Text>
      <Text medium style={s.textInfo}>
        {t('ImportExistingAccounts.textInfo')}
      </Text>
    </View>
  );
}

export default Header;
