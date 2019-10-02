import T from 'prop-types';
import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { getHitSlop } from './helpers';
import {
  isAndroidLower21,
  isAndroid28,
} from '../../utils/detectDevice';

const noop = () => {};

const Touchable = ({
  onPress,
  onLongPress,
  children,
  rippleColor,
  style,
  backgroundType,
  borderless = false,
  useOpacityAndroid = false,
  containerStyle,
  hitSlop,
  ...props
}) => {
  if (
    isAndroidLower21 ||
    (borderless && isAndroid28) ||
    useOpacityAndroid
  ) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onLongPress={onLongPress}
        onPress={onPress}
        style={style}
        hitSlop={getHitSlop(hitSlop)}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={containerStyle}>
      <TouchableNativeFeedback
        onLongPress={onLongPress}
        onPress={onPress}
        hitSlop={getHitSlop(hitSlop)}
        {...props}
        background={
          backgroundType
            ? TouchableNativeFeedback[backgroundType]()
            : TouchableNativeFeedback.Ripple(rippleColor, borderless)
        }
      >
        {style ? <View style={style}>{children}</View> : children}
      </TouchableNativeFeedback>
    </View>
  );
};

Touchable.defaultProps = {
  onPress: noop,
  rippleColor: '#d5d3d5',
};

Touchable.propTypes = {
  onPress: T.func,
  children: T.any,
  style: T.any,
  onLongPress: T.func,
  rippleColor: T.string,
  backgroundType: T.string,
  borderless: T.bool,
  useOpacityAndroid: T.bool,
  containerStyle: T.any,
  hitSlop: T.oneOfType([T.number, T.object]),
};

export default Touchable;
