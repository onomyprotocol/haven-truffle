import AsyncStorage from '@react-native-community/async-storage';

const FIRST_LOGIN_TO_APP = 'node-haven-firs-login';

const createStore = () => {
  const getIsNotFirstInput = async () =>
    JSON.parse(await AsyncStorage.getItem(FIRST_LOGIN_TO_APP));

  const setIsFirstInput = async () =>
    AsyncStorage.setItem(FIRST_LOGIN_TO_APP, JSON.stringify(true));

  return {
    getIsNotFirstInput,
    setIsFirstInput,
  };
};

export default createStore;
