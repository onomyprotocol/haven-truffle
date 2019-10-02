import T from 'prop-types';
import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { getHitSlop } from './helpers';

const noop = () => {};

const Touchable = ({
  onPress,
  onLongPress,
  children,
  style,
  useHighlight,
  hitSlop,
  ...props
}) => {
  if (useHighlight) {
    return (
      <TouchableHighlight
        onLongPress={onLongPress}
        onPress={onPress}
        style={style}
        hitSlop={getHitSlop(hitSlop)}
        {...props}
      >
        {children}
      </TouchableHighlight>
    );
  }

  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={style}
      hitSlop={getHitSlop(hitSlop)}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

Touchable.defaultProps = {
  onPress: noop,
};

Touchable.propTypes = {
  onPress: T.func,
  children: T.any,
  style: T.any,
  onLongPress: T.func,
  useHighlight: T.bool,
  hitSlop: T.oneOfType([T.number, T.object]),
};

export default Touchable;
