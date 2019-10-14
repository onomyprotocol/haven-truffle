import React from 'react';
import { FlatList, View } from 'react-native';
import T from 'prop-types';
import {
  HeaderTitle,
  BackButton,
  NumberSectionInput,
  Text,
  Button,
} from '../../components';
import { t } from '../../i18n';
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

function RecoverExistingAccount({ navigation }) {
  const buttonTextKey = navigation.getParam(
    'buttonTextKey',
    'recoverExistingAccount.textButton',
  );

  const onPress = navigation.getParam('onPress', () => {});

  return (
    <View style={s.wrapper}>
      <FlatList
        ListHeaderComponent={() => (
          <Text medium style={s.textInfo}>
            {t('recoverExistingAccount.textInfo')}
          </Text>
        )}
        style={s.container}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <NumberSectionInput
            number={item.number}
            text={item.text}
            containerStyle={s.item}
          />
        )}
        keyExtractor={({ number }) => number}
      />
      <View style={s.bottomContainer}>
        <Button
          title={t(buttonTextKey)}
          containerStyle={s.containerButton}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

RecoverExistingAccount.propTypes = {
  navigation: T.object,
};

RecoverExistingAccount.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: (
    <HeaderTitle
      style={s.headerTitle}
      textKey="recoverExistingAccount.headerTitle"
    />
  ),
};

export default RecoverExistingAccount;
