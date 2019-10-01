import React from 'react';
import T from 'prop-types';
import { BottomTabBar } from 'react-navigation-tabs';

const TabBarBottomCustom = ({ jumpTo, ...props }) => (
  <BottomTabBar
    {...props}
    onTabPress={({ route }) => jumpTo(route.key)}
  />
);

TabBarBottomCustom.propTypes = {
  jumpTo: T.func,
};

export default TabBarBottomCustom;
