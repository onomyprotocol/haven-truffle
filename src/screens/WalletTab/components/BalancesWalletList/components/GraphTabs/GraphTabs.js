import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { t } from '../../../../../../i18n';
import { Touchable, Text } from '../../../../../../components';
import s from './styles';

function GraphTabs({ activeMetric, setActiveMetric }) {
  return (
    <View style={s.container}>
      <Text semiBold style={s.earningsText}>
        {t('common.earnings')}
      </Text>
      <View style={s.containerMetric}>
        {[
          { number: 0, text: 'common.24h' },
          { number: 1, text: 'common.week' },
          { number: 2, text: 'common.month' },
          { number: 3, text: 'common.year' },
          { number: 4, text: 'common.allTime' },
        ].map((item) => (
          <Touchable
            onPress={() => setActiveMetric(item.number)}
            hitSlop={8}
            style={s.metricButton}
            key={item.number}
          >
            <Text
              style={[
                s.metricText,
                activeMetric === item.number && s.activeMetricText,
              ]}
            >
              {t(item.text)}
            </Text>
          </Touchable>
        ))}
      </View>
    </View>
  );
}

GraphTabs.propTypes = {
  activeMetric: T.number,
  setActiveMetric: T.func,
};

export default GraphTabs;
