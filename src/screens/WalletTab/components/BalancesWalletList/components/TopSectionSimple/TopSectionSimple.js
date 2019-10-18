import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Text, Touchable } from '../../../../../../components';
import s from './styles';
import { t } from '../../../../../../i18n';

function TopSectionSimple({ title, price, number }) {
  return (
    <View style={s.container}>
      <Text semiBold style={s.topText}>
        {title}
      </Text>
      <View style={s.containerBottom}>
        <View style={s.containerText}>
          <Text bold stile={s.leftText}>
            {number}
          </Text>
          <Text medium style={s.priceText}>
            {price}
          </Text>
        </View>
        <Touchable style={[s.button, s.buttonSend]}>
          <Text semiBold style={s.buttonText}>
            {t('common.send')}
          </Text>
        </Touchable>
        <Touchable style={[s.button, s.buttonPurchase]}>
          <Text semiBold style={s.buttonText}>
            {t('common.purchase')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

TopSectionSimple.propTypes = {
  title: T.string.isRequired,
  price: T.string.isRequired,
  number: T.string.isRequired,
};

export default TopSectionSimple;
