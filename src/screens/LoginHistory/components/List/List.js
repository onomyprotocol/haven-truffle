import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import ListItem from '../ListItem/ListItem';
import { iconHelper } from './helpers';

function List({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <ListItem
          icon={iconHelper(item.platform)}
          isOnline={!index}
          date={item.date}
          connectStatus={item.connectStatus}
          platform={item.platform}
          location={item.location}
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
