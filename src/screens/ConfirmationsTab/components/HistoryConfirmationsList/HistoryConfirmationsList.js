import React from 'react';
import { FlatList } from 'react-native';
import { ConfirmationsListItem } from '../../../../components';

const data = [
  {
    id: '1',
    avatar:
      'http://personsbook.com/wp-content/uploads/2016/03/cropped-personslogoavatar.jpg',
    userName: 'Relictos1',
    count: 184,
  },
  {
    id: '2',
    avatar:
      'http://personsbook.com/wp-content/uploads/2016/03/cropped-personslogoavatar.jpg',
    userName: 'Relictos2',
    count: 56,
  },
  {
    id: '3',
    avatar:
      'http://personsbook.com/wp-content/uploads/2016/03/cropped-personslogoavatar.jpg',
    userName: 'Relictos3',
    count: 184,
  },
];

function HistoryConfirmationsList() {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item, index }) => (
        <ConfirmationsListItem
          type="history"
          onPress={() => {}}
          avatar={item.avatar}
          userName={item.userName}
          count={item.count}
          index={index}
        />
      )}
    />
  );
}

export default HistoryConfirmationsList;
