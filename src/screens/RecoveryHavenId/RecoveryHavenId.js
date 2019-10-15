import React from 'react';
import { FlatList, View } from 'react-native';
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
import { NavigationService } from '../../services';
import { screenKey } from '../../constants';

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

function RecoveryHavenId() {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <Text medium style={s.textInfo}>
          {t('recoveryHavenId.textInfo')}
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
      ListFooterComponent={() => (
        <View style={s.bottomContainer}>
          <Text medium style={s.bottomText}>
            {t('recoveryHavenId.textBottom')}
          </Text>
          <Button
            title={t('common.recoverAccount')}
            containerStyle={s.containerButton}
            onPress={() =>
              NavigationService.navigateToAreYouSure({
                screenKey: screenKey.SETTINGS,
              })
            }
          />
        </View>
      )}
    />
  );
}

RecoveryHavenId.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="recoveryHavenId.headerTitle" />,
};

export default RecoveryHavenId;
