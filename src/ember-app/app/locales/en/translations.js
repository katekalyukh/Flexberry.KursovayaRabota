import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovayaRabotaКлиентLForm from './forms/i-i-s-kursovaya-rabota-клиент-l';
import IISKursovayaRabotaОператорLForm from './forms/i-i-s-kursovaya-rabota-оператор-l';
import IISKursovayaRabotaОплатаLForm from './forms/i-i-s-kursovaya-rabota-оплата-l';
import IISKursovayaRabotaПечатьФотоLForm from './forms/i-i-s-kursovaya-rabota-печать-фото-l';
import IISKursovayaRabotaПроверкаКиоскаLForm from './forms/i-i-s-kursovaya-rabota-проверка-киоска-l';
import IISKursovayaRabotaФотокиоскLForm from './forms/i-i-s-kursovaya-rabota-фотокиоск-l';
import IISKursovayaRabotaКлиентEForm from './forms/i-i-s-kursovaya-rabota-клиент-e';
import IISKursovayaRabotaОператорEForm from './forms/i-i-s-kursovaya-rabota-оператор-e';
import IISKursovayaRabotaОплатаEForm from './forms/i-i-s-kursovaya-rabota-оплата-e';
import IISKursovayaRabotaПечатьФотоEForm from './forms/i-i-s-kursovaya-rabota-печать-фото-e';
import IISKursovayaRabotaПроверкаКиоскаEForm from './forms/i-i-s-kursovaya-rabota-проверка-киоска-e';
import IISKursovayaRabotaФотокиоскEForm from './forms/i-i-s-kursovaya-rabota-фотокиоск-e';
import IISKursovayaRabotaКлиентModel from './models/i-i-s-kursovaya-rabota-клиент';
import IISKursovayaRabotaКоррекцияModel from './models/i-i-s-kursovaya-rabota-коррекция';
import IISKursovayaRabotaОператорModel from './models/i-i-s-kursovaya-rabota-оператор';
import IISKursovayaRabotaОплатаModel from './models/i-i-s-kursovaya-rabota-оплата';
import IISKursovayaRabotaПечатьФотоModel from './models/i-i-s-kursovaya-rabota-печать-фото';
import IISKursovayaRabotaПроверкаКиоскаModel from './models/i-i-s-kursovaya-rabota-проверка-киоска';
import IISKursovayaRabotaФотокиоскModel from './models/i-i-s-kursovaya-rabota-фотокиоск';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-клиент': IISKursovayaRabotaКлиентModel,
    'i-i-s-kursovaya-rabota-коррекция': IISKursovayaRabotaКоррекцияModel,
    'i-i-s-kursovaya-rabota-оператор': IISKursovayaRabotaОператорModel,
    'i-i-s-kursovaya-rabota-оплата': IISKursovayaRabotaОплатаModel,
    'i-i-s-kursovaya-rabota-печать-фото': IISKursovayaRabotaПечатьФотоModel,
    'i-i-s-kursovaya-rabota-проверка-киоска': IISKursovayaRabotaПроверкаКиоскаModel,
    'i-i-s-kursovaya-rabota-фотокиоск': IISKursovayaRabotaФотокиоскModel
  },

  'application-name': 'Kursovaya rabota',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya rabota',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota',
          title: 'Kursovaya rabota'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'kursovaya-rabota': {
          caption: 'KursovayaRabota',
          title: 'KursovayaRabota',
          'i-i-s-kursovaya-rabota-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-kursovaya-rabota-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-kursovaya-rabota-проверка-киоска-l': {
            caption: 'Проверка киоска',
            title: ''
          },
          'i-i-s-kursovaya-rabota-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-kursovaya-rabota-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-kursovaya-rabota-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-клиент-l': IISKursovayaRabotaКлиентLForm,
    'i-i-s-kursovaya-rabota-оператор-l': IISKursovayaRabotaОператорLForm,
    'i-i-s-kursovaya-rabota-оплата-l': IISKursovayaRabotaОплатаLForm,
    'i-i-s-kursovaya-rabota-печать-фото-l': IISKursovayaRabotaПечатьФотоLForm,
    'i-i-s-kursovaya-rabota-проверка-киоска-l': IISKursovayaRabotaПроверкаКиоскаLForm,
    'i-i-s-kursovaya-rabota-фотокиоск-l': IISKursovayaRabotaФотокиоскLForm,
    'i-i-s-kursovaya-rabota-клиент-e': IISKursovayaRabotaКлиентEForm,
    'i-i-s-kursovaya-rabota-оператор-e': IISKursovayaRabotaОператорEForm,
    'i-i-s-kursovaya-rabota-оплата-e': IISKursovayaRabotaОплатаEForm,
    'i-i-s-kursovaya-rabota-печать-фото-e': IISKursovayaRabotaПечатьФотоEForm,
    'i-i-s-kursovaya-rabota-проверка-киоска-e': IISKursovayaRabotaПроверкаКиоскаEForm,
    'i-i-s-kursovaya-rabota-фотокиоск-e': IISKursovayaRabotaФотокиоскEForm
  },

});

export default translations;
