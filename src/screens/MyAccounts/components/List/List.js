import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';

import ListItem from '../ListItem/ListItem';
import s from './styles';

function List({ data }) {
  return (
    <FlatList
      style={s.container}
      data={data}
      renderItem={({ item, index }) => (
        <ListItem
          containerStyle={index % 2 && s.itemBG}
          fullName={item.fullName}
          title={item.title}
          onPress={() => {}}
          listIcon={['green', 'blue']}
        />
      )}
      keyExtractor={({ id }) => id}
    />
  );
}

List.propTypes = {
  data: T.array.isRequired,
};

export default List;
