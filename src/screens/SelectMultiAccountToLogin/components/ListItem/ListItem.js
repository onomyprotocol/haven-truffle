import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';

import { Avatar, Touchable, Text } from '../../../../components';
import { CheckIcon } from '../../../../assets/svg';
import s from './styles';

function ListItem({
  id,
  title,
  fullName,
  avatarUri,
  check,
  onPressItem,
  containerStyle,
}) {
  const onPress = () => {
    onPressItem(id);
  };

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
      <View style={[s.containerCheck, check && s.check]}>
        {check ? <CheckIcon /> : null}
      </View>
    </Touchable>
  );
}

ListItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  id: T.string,
  title: T.string,
  fullName: T.string,
  avatarUri: T.string,
  check: T.bool,
  onPressItem: T.func,
};

export default ListItem;
