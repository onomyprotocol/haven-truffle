import React, { useState } from 'react';
import T from 'prop-types';

import { Touchable, Text, Avatar } from '../../../../components';
import { DownArrow, UpArrow } from '../../../../components/icons';
import s from './styles';

function Section({ avatar, text, children }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <Touchable
        style={s.container}
        onPress={() => setActive((val) => !val)}
      >
        <Avatar uri={avatar} size={32} />
        <Text semiBold style={s.text}>
          {text}
        </Text>
        {active ? <UpArrow /> : <DownArrow />}
      </Touchable>
      {active ? children : null}
    </>
  );
}

Section.propTypes = {
  text: T.string,
  children: T.node,
  avatar: T.string,
};

export default Section;
