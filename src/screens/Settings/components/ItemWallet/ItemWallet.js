import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { Text, SwitchButton } from '../../../../components';
import s from './styles';
import { t } from '../../../../i18n';

function ItemWallet() {
  const [isEnabled, setIsEnabled] = useState();

  const onChange = useCallback(() => {
    setIsEnabled((value) => !value);
  }, []);

  return (
    <View style={s.container}>
      <Text medium style={s.text}>
        {t('settings.walletAdvanced')}
      </Text>
      <SwitchButton enabled={isEnabled} onChange={onChange} />
    </View>
  );
}

export default ItemWallet;
