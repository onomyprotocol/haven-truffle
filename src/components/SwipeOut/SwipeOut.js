import React from 'react';
import T from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function SwipeOut({
  children,
  renderLeftActions,
  renderRightActions,
  ...props
}) {
  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      {...props}
    >
      {children}
    </Swipeable>
  );
}

SwipeOut.propTypes = {
  children: T.any,
  renderLeftActions: T.func,
  renderRightActions: T.func,
  leftThreshold: T.number,
  rightThreshold: T.number,
};

export default SwipeOut;
