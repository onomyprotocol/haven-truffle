import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';

import { Touchable, Text } from '../../../../components';
import s from './styles';

function ListItem({ text, onPress, active }) {
  return (
    <Touchable
      style={[s.container, active && s.activeBg]}
      containerStyle={s.contentContainer}
      onPress={() => onPress(text)}
    >
      <View>
        <Text medium style={[s.text, active && s.activeText]}>
          {text}
        </Text>
      </View>
    </Touchable>
  );
}

ListItem.propTypes = {
  text: T.string,
  active: T.bool,
  onPress: T.func,
};

export default ListItem;
