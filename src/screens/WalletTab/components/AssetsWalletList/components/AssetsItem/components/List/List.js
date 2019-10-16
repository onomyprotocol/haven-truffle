import React from 'react';
import T from 'prop-types';

import ListItem from '../ListItem/ListItem';
import s from './styles';

function List({ data = [] }) {
  return (
    <>
      {data.map((item, index) => (
        <ListItem
          containerStyle={!(index % 2) && s.itemBG}
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </>
  );
}

List.propTypes = {
  data: T.array,
};

export default List;
