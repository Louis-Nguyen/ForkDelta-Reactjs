import i18n from 'i18next';

import common_en from './translations/en/common.json'
import common_kor from './translations/kor/common.json'
import common_esp from './translations/esp/common.json'
import common_fra from './translations/fra/common.json'
import common_chn from './translations/chn/common.json'


i18n
  .init({
    lng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      kor: {
          common: common_kor
      },
      esp:{
        common: common_esp
      },
      fra:{
        common: common_fra
      },
      chn:{
        common: common_chn
      }
    }
  });


export default i18n;