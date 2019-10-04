import I18n from '../libs/i18n';
import en from './en.json';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';
// I18n.locale = 'en' // to set locale

I18n.translations = {
  en,
};

export function t(...args) {
  return I18n.t(...args);
}

export default I18n;
