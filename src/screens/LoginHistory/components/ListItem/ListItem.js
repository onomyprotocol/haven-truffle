import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import { t } from '../../../../i18n';
import { typeConnectStatus } from '../../../../constants';
import { Text } from '../../../../components';
import s from './styles';

function ListItem({
  icon,
  date,
  connectStatus,
  platform,
  location,
  containerStyle,
  isOnline,
}) {
  return (
    <View style={[s.container, containerStyle]}>
      <View style={s.containerIcon}>
        {isOnline ? <View style={s.online} /> : null}
        {icon()}
      </View>
      <View style={s.rightContainer}>
        <View style={s.containerText}>
          <Text semiBold style={[s.topText, s.topTextLeft]}>
            {platform}
          </Text>
          <Text medium style={s.topText}>
            {location}
          </Text>
        </View>
        <View style={s.containerText}>
          <Text style={s.textDate}>{date}</Text>
          <Text
            style={[
              s.connectStatus,
              connectStatus === typeConnectStatus.DENIED
                ? s.connectStatusRed
                : s.connectStatusGreen,
            ]}
          >
            {t(`loginHistory.${connectStatus}`)}
          </Text>
        </View>
      </View>
    </View>
  );
}

ListItem.propTypes = {
  isOnline: T.bool,
  icon: T.func,
  date: T.string,
  connectStatus: T.oneOf(['denied', 'approved']),
  platform: T.string,
  location: T.string,
  containerStyle: ViewPropTypes.style,
};

export default ListItem;
