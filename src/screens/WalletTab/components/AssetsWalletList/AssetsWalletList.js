import React from 'react';
import { ScrollView } from 'react-native';
import { AssetsItem } from './components';
import Section from '../Section/Section';

const data = [
  { id: '0', title: 'Crypto info Haven', description: 'Owner token' },
  { id: '1', title: 'Crypto info Haven', description: 'Owner token' },
  { id: '2', title: 'Crypto info Haven', description: 'Owner token' },
  { id: '3', title: 'Crypto info Haven', description: 'Owner token' },
  { id: '4', title: 'Crypto info Haven', description: 'Owner token' },
  { id: '5', title: 'Crypto info Haven', description: 'Owner token' },
];

function AssetsWalletList() {
  return (
    <ScrollView>
      <Section text="Relictos">
        <AssetsItem dataHavensOwned={data} />
      </Section>
      <Section text="Relictos">
        <AssetsItem dataHavensOwned={data} />
      </Section>
    </ScrollView>
  );
}

export default AssetsWalletList;
