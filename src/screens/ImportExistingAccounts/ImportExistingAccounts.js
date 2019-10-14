import React from 'react';
import { View } from 'react-native';

import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import { HeaderTitle, Button } from '../../components';
import { List, Header } from './components';
import s from './styles';
import { NavigationService } from '../../services';

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
        onPress={() =>
          NavigationService.navigateToSuccessfullyImported()
        }
        title={t('importExistingAccounts.textButton')}
        containerStyle={s.containerButton}
      />
    </View>
  );
}

ImportExistingAccounts.navigationOptions = {
  ...headerStyle,
  headerTitle: (
    <HeaderTitle
      style={s.headerTitle}
      textKey="importExistingAccounts.headerTitle"
    />
  ),
};

export default ImportExistingAccounts;
