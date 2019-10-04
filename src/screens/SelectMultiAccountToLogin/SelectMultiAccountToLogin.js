import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import { t } from '../../i18n';
import { defaultHeaderStyles } from '../../styles';
import { BackButton, HeaderTitle, Button } from '../../components';
import { List, EmptyListAccount } from './components';
import s from './styles';

const data = [
  { id: '1', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '2', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '3', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '4', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '5', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '6', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '7', fullName: 'Michael Glazyrin', title: 'Relictos' },
  { id: '8', fullName: 'Michael Glazyrin', title: 'Relictos' },
];

function SelectMultiAccountToLogin() {
  const [activeItemId, setActiveItemId] = useState('');

  const onPressItem = useCallback(
    (id) => {
      setActiveItemId(id);
    },
    [setActiveItemId],
  );
  return (
    <View style={s.container}>
      {data.length ? (
        <List data={data} {...{ activeItemId, onPressItem }} />
      ) : (
        <EmptyListAccount />
      )}
      <Button
        title={t('common.continue')}
        containerStyle={s.containerButton}
      />
    </View>
  );
}

SelectMultiAccountToLogin.navigationOptions = {
  ...defaultHeaderStyles,
  headerLeft: <BackButton containerStyle={s.leftHeader} />,
  headerTitle: <HeaderTitle textKey="selectAccountToLogin.title" />,
};

export default SelectMultiAccountToLogin;
