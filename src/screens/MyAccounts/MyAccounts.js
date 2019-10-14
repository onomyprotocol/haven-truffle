import React from 'react';
import { ScrollView, View } from 'react-native';

import { headerStyle } from '../../styles';
import { HeaderTitle } from '../../components';
import { Section, HeaderRight, EmptyListAccount } from './components';
import s from './styles';

const data = [
  { id: '1', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '2', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '3', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '4', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '5', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '6', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '7', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '8', fullName: 'Michael Glazyrin', title: 'Relictos' },
];

const isEmpty = false;

function MyAccounts() {
  return (
    <View style={s.container}>
      {isEmpty ? (
        <EmptyListAccount />
      ) : (
        <ScrollView style={s.container}>
          <Section text="Haven Social Accounts" data={data} />
          <Section text="Haven Social Accounts" data={data} />
        </ScrollView>
      )}
    </View>
  );
}

MyAccounts.navigationOptions = {
  ...headerStyle,
  headerLeft: (
    <HeaderTitle
      textKey="myAccounts.headerTitle"
      style={s.headerLeft}
    />
  ),
  headerRight: <HeaderRight />,
};

export default MyAccounts;
