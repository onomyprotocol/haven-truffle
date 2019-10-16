import React from 'react';
import { ScrollView } from 'react-native';
import Section from '../Section/Section';
import List from './components/List/List';
import s from './styles';

const data = [
  {
    title: 'Yesterday',
    data: [
      {
        id: '0',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '1',
        price: '25',
        totalPrice: '$53.3',
        text: 'Received from Alexander Pushnoy',
      },
    ],
  },
  {
    title: '16 May',
    data: [
      {
        id: '2',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '3',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '4',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '5',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '6',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '7',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '8',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
      {
        id: '9',
        price: '-100',
        totalPrice: '$213.2',
        text: 'Coins withdrawal to banking card ****-998',
      },
    ],
  },
];

function HistoryWalletList() {
  return (
    <ScrollView style={s.container}>
      <Section text="Relictos" key="1">
        <List data={[data[0]]} />
      </Section>
      <Section text="Relictos" data={data} key="2">
        <List data={data} />
      </Section>
    </ScrollView>
  );
}

export default HistoryWalletList;
