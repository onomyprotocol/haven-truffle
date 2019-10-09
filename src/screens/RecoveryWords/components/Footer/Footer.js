import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../../../../components';
import { t } from '../../../../i18n';
import s from './styles';

function Footer() {
  return (
    <View style={s.bottomContainer}>
      <Text medium style={s.bottomText}>
        {t('recoveryWords.textBottom')}
      </Text>
      <Button
        title={t('common.done')}
        containerStyle={s.containerButton}
      />
    </View>
  );
}

export default Footer;
