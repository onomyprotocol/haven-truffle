import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

function Container({ children, style }) {
  return <View style={[s.container, style]}>{children}</View>;
}

Container.propTypes = {
  children: T.node.isRequired,
  style: ViewPropTypes.style,
};

export default Container;
