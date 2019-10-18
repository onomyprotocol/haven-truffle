import React from 'react';
import { View } from 'react-native';
import { Text, Touchable } from '../../../../../../components';
import { t } from '../../../../../../i18n';
import s from './styles';

function WithdrawSection() {
  return (
    <View style={s.container}>
      <View style={s.containerText}>
        <Text medium style={s.topText}>
          Mainnet Kudos
        </Text>
        <View style={s.containerBottomText}>
          <Text bold style={s.leftText}>
            1540.22
          </Text>
          <Text semiBold style={s.rightText}>
            $10,302.22
          </Text>
        </View>
      </View>
      <Touchable style={s.button}>
        <Text semiBold style={s.buttonText}>
          {t('walletTab.balancesTab.withdraw')}
        </Text>
      </Touchable>
    </View>
  );
}

WithdrawSection.propTypes = {};

export default WithdrawSection;
