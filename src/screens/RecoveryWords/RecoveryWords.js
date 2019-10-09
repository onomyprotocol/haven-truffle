import React from 'react';
import { FlatList, View } from 'react-native';
import {
  HeaderTitle,
  BackButton,
  NumberSection,
} from '../../components';
import { Header, Footer } from './components';
import { headerStyle } from '../../styles';
import s from './styles';

const data = [
  { text: 'After', number: '1' },
  { text: 'all', number: '2' },
  { text: 'the', number: '3' },
  { text: 'pretty', number: '4' },
  { text: 'contrast', number: '5' },
  { text: 'of', number: '6' },
  { text: 'life', number: '7' },
  { text: 'and', number: '8' },
  { text: 'death', number: '9' },
  { text: 'Proves', number: '10' },
  { text: 'that', number: '11' },
  { text: 'these', number: '12' },
];

function RecoveryWords() {
  return (
    <View style={s.wrapper}>
      <FlatList
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        style={s.container}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <NumberSection
            number={item.number}
            text={item.text}
            containerStyle={s.item}
          />
        )}
        keyExtractor={({ number }) => number}
      />
    </View>
  );
}

RecoveryWords.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="recoveryWords.headerTitle" />,
};

export default RecoveryWords;
