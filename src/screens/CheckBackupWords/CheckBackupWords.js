import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import {
  HeaderTitle,
  BackButton,
  Text,
  Button,
} from '../../components';
import { ListItem } from './components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';

const data = [
  { text: 'Order', id: '1' },
  { text: 'Grill', id: '2' },
  { text: 'Reborn', id: '3' },
  { text: 'Growth', id: '4' },
  { text: 'After', id: '5' },
  { text: 'Masacre', id: '6' },
];

function CheckBackupWords() {
  const [activeItem, setActiveItem] = useState('');

  const onPress = useCallback((text) => {
    setActiveItem(text);
  });

  return (
    <View style={s.wrapper}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('checkBackupWords.headerTitle')}
        </Text>
        <Text medium style={s.textInfoTop}>
          {t('checkBackupWords.textInfoTop')}
        </Text>
        <Text bold style={s.textInfoBottom}>
          {t('checkBackupWords.textInfoBottom')}
        </Text>
      </View>
      <FlatList
        style={s.container}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            text={item.text}
            onPress={onPress}
            active={activeItem === item.text}
          />
        )}
        keyExtractor={({ id }) => id}
      />
      <View style={s.bottomContainer}>
        <Button
          title={t('checkBackupWords.button')}
          containerStyle={s.containerButton}
        />
      </View>
    </View>
  );
}

CheckBackupWords.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="checkBackupWords.headerTitle" />,
};

export default CheckBackupWords;
