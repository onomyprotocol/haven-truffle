import React from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import T from 'prop-types';

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

function Container({ children, style }) {
  return <View style={[s.container, style]}>{children}</View>;
}

Container.propTypes = {
  children: T.node.isRequired,
  style: ViewPropTypes.style,
};

export default Container;
