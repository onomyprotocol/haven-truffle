import React from 'react';
import T from 'prop-types';

import ListItem from '../ListItem/ListItem';
import s from './styles';

function List({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <ListItem
          containerStyle={index % 2 && s.itemBG}
          fullName={item.fullName}
          title={item.title}
          onPress={() => {}}
          listIcon={['green', 'blue']}
          key={item.id}
        />
      ))}
    </>
  );
}

List.propTypes = {
  data: T.array.isRequired,
};

export default List;
