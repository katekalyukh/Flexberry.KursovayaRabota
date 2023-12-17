import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya rabota',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota',
          title: 'Kursovaya rabota'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
