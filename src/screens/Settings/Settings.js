import React from 'react';
import { View } from 'react-native';
import { HeaderTitle } from '../../components';
import {
  ItemWallet,
  ItemGenerate,
  ItemRecover,
  ItemView,
} from './components';
import { headerStyle } from '../../styles';
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
  ...headerStyle,
  headerLeft: (
    <HeaderTitle textKey="settings.headerTitle" style={s.header} />
  ),
};

export default Settings;
