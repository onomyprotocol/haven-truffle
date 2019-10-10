import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';

import {
  Avatar,
  Touchable,
  Text,
  IconGrade,
} from '../../../../components';
import { VerticalDots } from '../../../../components/icons';
import s from './styles';

function ListItem({
  title,
  fullName,
  avatarUri,
  onPress,
  containerStyle,
  listIcon = [],
}) {
  return (
    <Touchable
      style={[s.container, containerStyle]}
      onPress={onPress}
    >
      <Avatar size={56} uri={avatarUri && avatarUri} />
      <View style={s.containerText}>
        <Text medium style={s.title}>
          {title}
        </Text>
        <Text style={s.fullName}>{fullName}</Text>
      </View>
      <View style={s.containerIcon}>
        {listIcon.map((color) => (
          <IconGrade
            color={color}
            key={color}
            containerStyle={s.icon}
          />
        ))}
        <Touchable hitSlop={8} style={s.containerDots}>
          <VerticalDots />
        </Touchable>
      </View>
    </Touchable>
  );
}

ListItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  listIcon: T.array,
  title: T.string,
  fullName: T.string,
  avatarUri: T.string,
  onPress: T.func,
};

export default ListItem;
