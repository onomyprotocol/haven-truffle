import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import TopSectionSimple from '../TopSectionSimple/TopSectionSimple';
import BottomSection from '../BottomSection/BottomSection';
import Graph from '../Graph/Graph';
import s from './styles';

function ItemSimple({
  dataGraph,
  title,
  price,
  number,
  contentTips,
  subscriptions,
  havens,
}) {
  return (
    <View style={s.container}>
      <TopSectionSimple title={title} price={price} number={number} />
      <Graph data={dataGraph} labelTitle="kudos" />
      <BottomSection
        contentTips={contentTips}
        subscriptions={subscriptions}
        havens={havens}
      />
    </View>
  );
}

ItemSimple.propTypes = {
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
  contentTips: T.number,
  subscriptions: T.number,
  havens: T.number,
};

export default ItemSimple;
