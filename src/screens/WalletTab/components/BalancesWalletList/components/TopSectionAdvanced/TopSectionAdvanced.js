import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Text } from '../../../../../../components';
import ButtonsSection from '../ButtonsSection/ButtonsSection';
import WithdrawSection from '../WithdrawSection/WithdrawSection';
import s from './styles';
import { t } from '../../../../../../i18n';

function TopSectionAdvanced({
  title,
  price,
  number,
  earnedNumber,
  purchasedNumber,
}) {
  return (
    <>
      <View style={s.container}>
        <View style={s.containerTop}>
          <View style={s.containerLeft}>
            <Text medium style={[s.textGray, s.availableText]}>
              {title}
            </Text>
            <View style={s.containerPrice}>
              <Text bold style={s.priceLeftText}>
                {number}
              </Text>
              <Text semiBold style={[s.textGray, s.priceRightText]}>
                {price}
              </Text>
            </View>
          </View>
          <View style={s.containerRight}>
            <View style={s.containerTopText}>
              <Text bold style={s.numberText}>
                {earnedNumber}
              </Text>
              <Text medium style={[s.rightText, s.textGray]}>
                {t('walletTab.balancesTab.earned')}
              </Text>
            </View>
            <View style={s.containerBottomText}>
              <Text bold style={s.numberText}>
                {purchasedNumber}
              </Text>
              <Text medium style={[s.rightText, s.textGray]}>
                {t('walletTab.balancesTab.purchased')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ButtonsSection />
      <WithdrawSection />
    </>
  );
}

TopSectionAdvanced.propTypes = {
  title: T.string,
  price: T.string,
  number: T.string,
  earnedNumber: T.string,
  purchasedNumber: T.string,
};

export default TopSectionAdvanced;
