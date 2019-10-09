import React from 'react';
import { View } from 'react-native';
import { HeaderTitle } from '../../components';
import {
  ItemWallet,
  ItemGenerate,
  ItemRecover,
  ItemView,
} from './components';
import { colors } from '../../styles';
import s from './styles';

function Settings() {
  return (
    <View>
      <ItemWallet />
      <ItemView />
      <ItemGenerate />
      <ItemRecover />
    </View>
  );
}

Settings.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerLeft: (
    <HeaderTitle textKey="settings.headerTitle" style={s.header} />
  ),
};

export default Settings;
