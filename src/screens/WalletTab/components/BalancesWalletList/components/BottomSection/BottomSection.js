import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { View } from 'react-native';
import T from 'prop-types';
import { Text } from '../../../../../../components';
import { t } from '../../../../../../i18n';
import s from './styles';
import { colors } from '../../../../../../styles';

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

function BottomSection({ contentTips, subscriptions, havens }) {
  const data = [
    { interest: contentTips, color: colors.green },
    { interest: subscriptions, color: colors.red },
    { interest: havens, color: colors.yellow },
  ];

  return (
    <View style={s.container}>
      <Text semiBold style={s.title}>
        {t('walletTab.balancesTab.earningTypes')}
      </Text>
      <View style={s.containerContent}>
        <View style={s.PieChart} />
        <PieChart
          data={data}
          hasLegend={false}
          width={124}
          height={124}
          chartConfig={chartConfig}
          accessor="interest"
          paddingLeft="24"
          backgroundColor="transparent"
        />
        <View style={s.containerText}>
          {[
            {
              text: `${contentTips}%`,
              style: s.colorGreen,
              localization: 'walletTab.balancesTab.contentTips',
            },
            {
              text: `${subscriptions}%`,
              style: s.colorRed,
              localization: 'walletTab.balancesTab.subscriptions',
            },
            {
              text: `${havens}%`,
              style: s.colorYellow,
              localization: 'walletTab.balancesTab.havens',
            },
          ].map((item) => (
            <View style={s.contentRow} key={item.localization}>
              <View style={[s.dot, item.style]} />
              <Text medium style={s.text}>
                {t(item.localization)}
              </Text>
              <Text bold style={s.interest}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

BottomSection.propTypes = {
  contentTips: T.number,
  subscriptions: T.number,
  havens: T.number,
};

export default BottomSection;
