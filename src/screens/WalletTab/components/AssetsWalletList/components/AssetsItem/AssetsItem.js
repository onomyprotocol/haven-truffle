import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import T from 'prop-types';
import { t } from '../../../../../../i18n';
import { Touchable, Text } from '../../../../../../components';
import { List } from './components';
import s from './styles';

function AssetsItem({ dataHavensOwned }) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Fragment>
      <View style={s.container}>
        <Touchable
          useOpacityAndroid
          onPress={() => setCurrentTab(0)}
          style={[
            s.textContainer,
            currentTab === 0 && s.textContainerActive,
          ]}
        >
          <View>
            <Text
              semiBold={currentTab === 0}
              medium={currentTab !== 0}
              style={[
                s.buttonText,
                currentTab === 0 && s.buttonActiveText,
              ]}
            >
              {t('walletTab.assetsTab.havensOwned')}
            </Text>
          </View>
        </Touchable>
        <Touchable
          useOpacityAndroid
          onPress={() => setCurrentTab(1)}
          style={[
            s.textContainer,
            currentTab === 1 && s.textContainerActive,
          ]}
        >
          <View>
            <Text
              semiBold={currentTab === 1}
              medium={currentTab !== 1}
              style={[
                s.buttonText,
                currentTab === 1 && s.buttonActiveText,
              ]}
            >
              {t('walletTab.assetsTab.badges')}
            </Text>
          </View>
        </Touchable>
        <Touchable
          useOpacityAndroid
          onPress={() => setCurrentTab(2)}
          style={[
            s.textContainer,
            currentTab === 2 && s.textContainerActive,
          ]}
        >
          <View>
            <Text
              semiBold={currentTab === 2}
              medium={currentTab !== 2}
              style={[
                s.buttonText,
                currentTab === 2 && s.buttonActiveText,
              ]}
            >
              {t('walletTab.assetsTab.tickets')}
            </Text>
          </View>
        </Touchable>
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
          first: () => <List data={dataHavensOwned} />,
          second: () =>
            dataHavensOwned.map((item) => (
              <Text key={item.id}>{item.title}</Text>
            )),
          third: () =>
            dataHavensOwned.map((item) => (
              <Text key={item.id}>{item.title}</Text>
            )),
        })}
        onIndexChange={(index) => setCurrentTab(index)}
        renderTabBar={() => null}
      />
    </Fragment>
  );
}

AssetsItem.propTypes = {
  dataHavensOwned: T.array,
};

AssetsItem.navigationOptions = {
  header: null,
};

export default AssetsItem;
