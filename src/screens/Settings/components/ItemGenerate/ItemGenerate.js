import React from 'react';
import { Touchable, Text } from '../../../../components';
import s from './styles';
import { t } from '../../../../i18n';
import { UpLoadIcon } from '../../../../components/icons';

function ItemGenerate() {
  return (
    <Touchable style={s.container}>
      <Text medium style={s.text}>
        {t('settings.generateNew')}
      </Text>
      <UpLoadIcon />
    </Touchable>
  );
}

export default ItemGenerate;
