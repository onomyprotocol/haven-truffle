import React from 'react';
import { headerStyle } from '../../styles';
import { HeaderTitle, Container } from '../../components';
import { List, HeaderLeft } from './components';
import s from './styles';

const data = [
  {
    id: '1',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',
    location: 'St. Petersburg, Russia',
  },
  {
    id: '2',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Android',
    location: 'St. Petersburg, Russia',
  },
  {
    id: '3',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',
    location: 'St. Petersburg, Russia',
  },
  {
    id: '4',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',
    location: 'St. Petersburg, Russia',
  },
  {
    id: '5',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',

    location: 'St. Petersburg, Russia',
  },
  {
    id: '6',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',

    location: 'St. Petersburg, Russia',
  },
  {
    id: '7',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',

    location: 'St. Petersburg, Russia',
  },
  {
    id: '8',
    date: 'Today, 9:15 AM',
    connectStatus: 'denied',
    platform: 'Mac OS',

    location: 'St. Petersburg, Russia',
  },
];

function LoginHistory() {
  return (
    <Container style={s.container}>
      <List data={data} />
    </Container>
  );
}

LoginHistory.navigationOptions = {
  ...headerStyle,
  headerLeft: <HeaderLeft />,
  headerTitle: (
    <HeaderTitle
      style={s.headerTitle}
      text="Relictos1"
      textKey="loginHistory.headerTitle"
    />
  ),
};

export default LoginHistory;
