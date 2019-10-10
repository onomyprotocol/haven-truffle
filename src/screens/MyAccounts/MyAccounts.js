import React from 'react';
import { ScrollView } from 'react-native';

import { headerStyle } from '../../styles';
import { BackButton, HeaderTitle } from '../../components';
import { Section } from './components';
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

function MyAccounts() {
  return (
    <ScrollView style={s.container}>
      <Section text="some text" data={data} />
      <Section text="some text" data={data} />
      <Section text="some text" data={data} />
    </ScrollView>
  );
}

MyAccounts.navigationOptions = {
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.leftHeader} />,
  headerTitle: <HeaderTitle textKey="selectAccountToLogin.title" />,
};

export default MyAccounts;
