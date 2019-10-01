import React, { Fragment } from 'react';
import { FlatList } from 'react-native';
import {
  ListItem,
  Footer,
  HeaderLeft,
  HeaderRight,
} from './components';
import { colors } from '../../styles';
import s from './styles';

const fakeIds = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
];

function Confirmation() {
  return (
    <Fragment>
      <Footer />
      <FlatList
        style={s.container}
        data={fakeIds}
        renderItem={({ index }) => <ListItem index={index} />}
        keyExtractor={({ id }) => id}
      />
    </Fragment>
  );
}

Confirmation.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerLeft: <HeaderLeft />,
  headerRight: <HeaderRight />,
};

export default Confirmation;
