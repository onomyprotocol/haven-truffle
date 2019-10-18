import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

export default StyleSheet.create({
  container: {
    marginVertical: 27,
  },
  earningsText: {
    fontSize: 16,
    color: colors.blueDark,
    marginLeft: 24,
  },
  containerMetric: {
    flexDirection: 'row',
    marginTop: 18,
    paddingLeft: 12,
  },
  metricButton: {
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  metricText: {
    fontSize: 14,
    color: colors.grayDark,
  },
  activeMetricText: {
    color: colors.primary,
  },
});
