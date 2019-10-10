import React, { useState } from 'react';
import T from 'prop-types';

import { Touchable, Text, IconGrade } from '../../../../components';
import { DownArrow, RightArrow } from '../../../../components/icons';
import List from '../List/List';
import s from './styles';

function Section({ text, data = [] }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <Touchable
        style={s.container}
        onPress={() => setActive((val) => !val)}
      >
        <IconGrade size={32} />
        <Text semiBold style={s.text}>
          {text}
        </Text>
        {active ? <DownArrow /> : <RightArrow />}
      </Touchable>
      {active ? <List data={data} /> : null}
    </>
  );
}

Section.propTypes = {
  text: T.string,
  data: T.array,
};

export default Section;
