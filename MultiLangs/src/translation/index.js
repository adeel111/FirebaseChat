import I18n from 'react-native-i18n';
import en from './en';
import fr from './fr';
import pr from './pr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fr,
  pr,
};

export default I18n;
