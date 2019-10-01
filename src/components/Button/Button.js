import React from 'react';
import T from 'prop-types';
import Touchable from '../Touchable';
import Text from '../Text/Text';
import s from './styles';

function Button({ title, titleStyle, containerStyle, onPress }) {
  return (
    <Touchable
      borderless
      style={[s.container, containerStyle]}
      onPress={onPress}
    >
      <Text medium style={[s.title, titleStyle]}>
        {title}
      </Text>
    </Touchable>
  );
}

Button.propTypes = {
  title: T.string,
  containerStyle: T.object,
  titleStyle: T.object,
  onPress: T.func,
};

export default Button;
