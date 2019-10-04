import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { t } from '../../i18n';
import { Touchable, Text, Empty } from '../../components';
import NewConfirmationsList from '../NewConfirmationsList/NewConfirmationsList';
import s from './styles';

function ConfirmationsTab() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Fragment>
      <View style={s.header}>
        <View style={s.headerButtonsContainer}>
          <Touchable onPress={() => setCurrentTab(0)}>
            <Text
              semiBold
              style={[
                s.buttonText,
                currentTab === 0 && s.buttonActiveText,
              ]}
            >
              {t('confirmationsTab.newConfirmations')}
            </Text>
          </Touchable>
          <Touchable
            style={s.buttonMarginLeft}
            onPress={() => setCurrentTab(1)}
          >
            <Text
              semiBold
              style={[
                s.buttonText,
                currentTab === 1 && s.buttonActiveText,
              ]}
            >
              {t('confirmationsTab.history')}
            </Text>
          </Touchable>
        </View>
      </View>
      <TabView
        navigationState={{
          index: currentTab,
          routes: [{ key: 'first' }, { key: 'second' }],
        }}
        renderScene={SceneMap({
          first: NewConfirmationsList,
          second: Empty,
        })}
        onIndexChange={(index) => setCurrentTab(index)}
        renderTabBar={() => null}
      />
    </Fragment>
  );
}

ConfirmationsTab.navigationOptions = {
  header: null,
};

export default ConfirmationsTab;
