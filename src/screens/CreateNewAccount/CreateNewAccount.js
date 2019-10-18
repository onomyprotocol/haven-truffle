import React from 'react';
import { View, Image } from 'react-native';
import {
  HeaderTitle,
  Text,
  Button,
  BackButton,
} from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';

const createNewAccount = require('../../../assets/createNewAccount.png');

function CreateNewAccount() {
  return (
    <View style={s.container}>
      <Image source={createNewAccount} style={s.image} />
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('createNewAccount.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('createNewAccount.textInfo')}
        </Text>
      </View>
      <Button
        onPress={() =>
          NavigationService.navigateToQrScanner(
            screens.SelectAccountToLogin,
          )
        }
        title={t('createNewAccount.textButton')}
        containerStyle={s.containerButton}
      />
    </View>
  );
}

CreateNewAccount.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="createNewAccount.headerTitle" />,
};

export default CreateNewAccount;
