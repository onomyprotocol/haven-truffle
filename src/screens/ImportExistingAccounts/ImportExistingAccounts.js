import React from 'react';
import { View } from 'react-native';

import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import { BackButton, HeaderTitle, Button } from '../../components';
import { List, Header } from './components';
import s from './styles';

const data = [
  { id: '1', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '2', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '3', fullName: 'Michael Glazyrin', title: 'Relictos' },
];

function ImportExistingAccounts() {
  return (
    <View style={s.container}>
      <Header />
      <List data={data} />
      <Button
        title={t('ImportExistingAccounts.textButton')}
        containerStyle={s.containerButton}
      />
    </View>
  );
}

ImportExistingAccounts.navigationOptions = {
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.leftHeader} />,
  headerTitle: (
    <HeaderTitle
      style={s.headerTitle}
      textKey="ImportExistingAccounts.headerTitle"
    />
  ),
};

export default ImportExistingAccounts;
