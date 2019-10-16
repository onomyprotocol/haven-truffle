import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { t } from '../../i18n';
import { Touchable, Text } from '../../components';
import {
  AssetsWalletList,
  HistoryWalletList,
  BalancesWalletList,
} from './components';
import s from './styles';

function WalletTab() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Fragment>
      <View style={s.header}>
        <View style={s.headerButtonsContainer}>
          <Touchable
            useOpacityAndroid
            onPress={() => setCurrentTab(0)}
          >
            <View>
              <Text
                semiBold
                style={[
                  s.buttonText,
                  currentTab === 0 && s.buttonActiveText,
                ]}
              >
                {t('walletTab.balances')}
              </Text>
            </View>
          </Touchable>
          <Touchable
            useOpacityAndroid
            style={s.buttonMarginLeft}
            onPress={() => setCurrentTab(1)}
          >
            <View>
              <Text
                semiBold
                style={[
                  s.buttonText,
                  currentTab === 1 && s.buttonActiveText,
                ]}
              >
                {t('walletTab.assets')}
              </Text>
            </View>
          </Touchable>
          <Touchable
            useOpacityAndroid
            style={s.buttonMarginLeft}
            onPress={() => setCurrentTab(2)}
          >
            <View>
              <Text
                semiBold
                style={[
                  s.buttonText,
                  currentTab === 2 && s.buttonActiveText,
                ]}
              >
                {t('walletTab.history')}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
      <TabView
        navigationState={{
          index: currentTab,
          routes: [
            { key: 'first' },
            { key: 'second' },
            { key: 'third' },
          ],
        }}
        renderScene={SceneMap({
          first: BalancesWalletList,
          second: AssetsWalletList,
          third: HistoryWalletList,
        })}
        onIndexChange={(index) => setCurrentTab(index)}
        renderTabBar={() => null}
      />
    </Fragment>
  );
}

WalletTab.navigationOptions = {
  header: null,
};

export default WalletTab;
