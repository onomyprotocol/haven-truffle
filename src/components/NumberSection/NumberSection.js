import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Text from '../Text/Text';
import s from './styles';

function NumberSection({ number, text, containerStyle }) {
  return (
    <View style={[s.container, containerStyle]}>
      <View style={s.containerNumber}>
        <Text medium style={s.textNumber}>
          {number}
        </Text>
      </View>
      <View style={s.containerText}>
        <Text style={s.text}>{text}</Text>
      </View>
    </View>
  );
}

NumberSection.propTypes = {
  text: T.string,
  number: T.string,
  containerStyle: ViewPropTypes.style,
};

export default NumberSection;
