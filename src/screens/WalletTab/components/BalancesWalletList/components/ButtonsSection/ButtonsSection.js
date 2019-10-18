import React from 'react';
import { View } from 'react-native';
import { Text, Touchable } from '../../../../../../components';
import {
  UpArrowTail,
  DownArrow,
} from '../../../../../../components/icons';
import { t } from '../../../../../../i18n';
import s from './styles';
import { colors } from '../../../../../../styles';

function ButtonsSection() {
  return (
    <View style={s.container}>
      <Touchable style={[s.button, s.arrowTail]}>
        <UpArrowTail />
      </Touchable>
      <Touchable style={[s.button, s.arrowTail]}>
        <UpArrowTail style={s.upArrow} />
      </Touchable>
      <Touchable style={[s.button, s.buttonText]}>
        <Text semiBold style={s.text}>
          {t('common.toMainnet')}
        </Text>
      </Touchable>
      <Touchable style={[s.button, s.buttonGray]}>
        <DownArrow color={colors.primary} />
      </Touchable>
    </View>
  );
}

ButtonsSection.propTypes = {};

export default ButtonsSection;
