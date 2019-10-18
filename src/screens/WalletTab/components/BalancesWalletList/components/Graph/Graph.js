import React, { useState } from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import T from 'prop-types';
import { colors, dimensions } from '../../../../../../styles';
import { helperLabels, helperData } from './helpers';
import GraphTabs from '../GraphTabs/GraphTabs';
import s from './styles';
import { Text } from '../../../../../../components';

const screenWidth = dimensions.width;

const chartConfig = {
  backgroundGradientFrom: '#E7E7E8',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(72, 119, 193, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const HEIGHT_GRAPH = 183;

function Graph({ data, labelTitle }) {
  const [activeMetric, setActiveMetric] = useState(1);

  const dataPoints = helperData(data, activeMetric);

  const maxPointFromData = Math.max(...dataPoints);

  const lastPointFromData = dataPoints[dataPoints.length - 1];

  return (
    <View style={s.container}>
      <GraphTabs {...{ activeMetric, setActiveMetric }} />
      <LineChart
        style={s.graph}
        fromZero
        withDots={false}
        withInnerLines={false}
        withHorizontalLabels={false}
        withOuterLines={false}
        data={{
          datasets: [
            {
              data: dataPoints,
              color: () => colors.primary,
              strokeWidth: 2,
            },
          ],
        }}
        width={screenWidth + 38}
        height={HEIGHT_GRAPH}
        chartConfig={chartConfig}
      />
      <View
        style={[
          s.containerLabelPoint,
          {
            bottom:
              ((HEIGHT_GRAPH - 46) / maxPointFromData) *
                lastPointFromData +
              60,
          },
        ]}
      >
        <Text medium style={s.labelPointText}>
          {`${lastPointFromData} ${labelTitle}`}
        </Text>
        <View style={s.labelArrow} />
      </View>
      <View
        style={[
          s.dot,
          {
            bottom:
              ((HEIGHT_GRAPH - 46) / maxPointFromData) *
                lastPointFromData +
              26,
          },
        ]}
      />
      <View style={s.containerXLabel}>
        {helperLabels(activeMetric).map((item) => (
          <Text bold style={s.xLabelText} key={item}>
            {item}
          </Text>
        ))}
      </View>
      <View />
    </View>
  );
}

Graph.propTypes = {
  data: T.shape({
    '24h': T.array,
    week: T.array,
    month: T.array,
    year: T.array,
    allTime: T.array,
  }).isRequired,
  labelTitle: T.string,
};

export default Graph;
