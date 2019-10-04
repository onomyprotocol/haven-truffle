import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from './components';

const data = [
  {
    id: '1',
    avatar:
      'http://personsbook.com/wp-content/uploads/2016/03/cropped-personslogoavatar.jpg',
    userName: 'Relictos1',
    count: 322,
  },
  {
    id: '2',
    avatar:
      'http://personsbook.com/wp-content/uploads/2016/03/cropped-personslogoavatar.jpg',
    userName: 'Relictos2',
    count: 3,
  },
  {
    id: '3',
    avatar:
      'http://personsbook.com/wp-content/uploads/2016/03/cropped-personslogoavatar.jpg',
    userName: 'Relictos3',
    count: 43,
  },
];

function NewConfirmationsList() {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item, index }) => (
        <ListItem
          avatar={item.avatar}
          userName={item.userName}
          count={item.count}
          index={index}
        />
      )}
    />
  );
}

export default NewConfirmationsList;
