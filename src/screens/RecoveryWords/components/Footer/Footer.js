import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import T from 'prop-types';
import { Text, Button } from '../../../../components';
import { t } from '../../../../i18n';
import s from './styles';

function Footer({ navigation }) {
  const buttonTextKey = navigation.getParam(
    'buttonTextKey',
    'common.done',
  );

  const onPress = navigation.getParam('onPress', () => {});

  return (
    <View style={s.bottomContainer}>
      <Text medium style={s.bottomText}>
        {t('recoveryWords.textBottom')}
      </Text>
      <Button
        title={t(buttonTextKey)}
        containerStyle={s.containerButton}
        onPress={onPress}
      />
    </View>
  );
}

Footer.propTypes = {
  navigation: T.object,
};

export default withNavigation(Footer);
