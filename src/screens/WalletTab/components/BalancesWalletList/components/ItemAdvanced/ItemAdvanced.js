import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import TopSectionAdvanced from '../TopSectionAdvanced/TopSectionAdvanced';
import s from './styles';
import Graph from '../Graph/Graph';
import BottomSection from '../BottomSection/BottomSection';

function ItemAdvanced({
  dataGraph,
  title,
  price,
  number,
  earnedNumber,
  purchasedNumber,
  contentTips,
  subscriptions,
  havens,
}) {
  return (
    <View style={s.container}>
      <TopSectionAdvanced
        {...{ title, price, number, earnedNumber, purchasedNumber }}
      />
      <Graph data={dataGraph} labelTitle="kudos" />
      <BottomSection
        contentTips={contentTips}
        subscriptions={subscriptions}
        havens={havens}
      />
    </View>
  );
}

ItemAdvanced.propTypes = {
  dataGraph: T.shape({
    '24h': T.array,
    week: T.array,
    month: T.array,
    year: T.array,
    allTime: T.array,
  }),
  title: T.string,
  price: T.string,
  number: T.string,
  earnedNumber: T.string,
  purchasedNumber: T.string,
  contentTips: T.number,
  subscriptions: T.number,
  havens: T.number,
};

export default ItemAdvanced;
