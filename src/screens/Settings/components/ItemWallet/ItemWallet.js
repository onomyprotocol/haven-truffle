import React, { useState, useCallback } from 'react';
import {
  Touchable,
  Text,
  SwitchButton,
} from '../../../../components';
import s from './styles';
import { t } from '../../../../i18n';

function ItemWallet() {
  const [isEnabled, setIsEnabled] = useState();

  const onChange = useCallback(() => {
    setIsEnabled((value) => !value);
  }, []);

  return (
    <Touchable style={s.container}>
      <Text medium style={s.text}>
        {t('settings.walletAdvanced')}
      </Text>
      <SwitchButton enabled={isEnabled} onChange={onChange} />
    </Touchable>
  );
}

export default ItemWallet;
