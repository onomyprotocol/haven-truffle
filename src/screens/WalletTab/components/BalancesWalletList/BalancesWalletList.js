import React from 'react';
import { ScrollView } from 'react-native';
import Section from '../Section/Section';
import { ItemSimple, ItemAdvanced } from './components';
import { data } from './mockData';

const propsForSimpleItem = {
  dataGraph: data,
  title: 'Available Kudos',
  price: '$29’300.22',
  number: '2902.59',
  contentTips: 60,
  subscriptions: 30,
  havens: 10,
};

const propsForAdvancedItem = {
  dataGraph: data,
  title: 'Available Kudos',
  price: '$29’300.22',
  number: '2902.59',
  contentTips: 60,
  subscriptions: 30,
  havens: 10,
  earnedNumber: '2902.59',
  purchasedNumber: '1200.00',
};

function HistoryWalletList() {
  return (
    <ScrollView>
      <Section text="Relictos">
        <ItemSimple {...propsForSimpleItem} />
      </Section>
      <Section text="Relictos">
        <ItemAdvanced {...propsForAdvancedItem} />
      </Section>
    </ScrollView>
  );
}

export default HistoryWalletList;
