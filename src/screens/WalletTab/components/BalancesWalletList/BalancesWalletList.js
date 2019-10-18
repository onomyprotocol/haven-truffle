import React from 'react';
import { ScrollView } from 'react-native';
import {
  DownArrowTail,
  UpArrowTail,
} from '../../../../components/icons';

function HistoryWalletList() {
  return (
    <ScrollView>
      <DownArrowTail />
      <UpArrowTail />
    </ScrollView>
  );
}

export default HistoryWalletList;
