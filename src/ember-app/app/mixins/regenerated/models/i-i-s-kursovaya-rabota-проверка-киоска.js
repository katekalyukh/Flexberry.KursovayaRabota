import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  бумага: DS.attr('boolean'),
  времяПроверки: DS.attr('string'),
  готовКРаботе: DS.attr('boolean'),
  датаПроверки: DS.attr('date'),
  картЗаправ: DS.attr('boolean'),
  оператор: DS.belongsTo('i-i-s-kursovaya-rabota-оператор', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya-rabota-фотокиоск', { inverse: null, async: false })
});

export let ValidationRules = {
  бумага: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.бумага.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяПроверки: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.времяПроверки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готовКРаботе: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.готовКРаботе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПроверки: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.датаПроверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  картЗаправ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.картЗаправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-проверка-киоска.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаКиоскаE', 'i-i-s-kursovaya-rabota-проверка-киоска', {
    оператор: belongsTo('i-i-s-kursovaya-rabota-оператор', 'Оператор', {
      фИО: attr('Оператор', { index: 1, hidden: true }),
      кодВхода: attr('Пароль', { index: 2 })
    }, { index: 0, displayMemberPath: 'фИО' }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-фотокиоск', 'Фотокиоск', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    картЗаправ: attr('Картридж заправлен', { index: 5 }),
    бумага: attr('Бумага есть', { index: 6 }),
    датаПроверки: attr('Дата проверки', { index: 7 }),
    времяПроверки: attr('Время проверки', { index: 8 }),
    готовКРаботе: attr('Готов к работе', { index: 9 })
  });

  modelClass.defineProjection('ПроверкаКиоскаL', 'i-i-s-kursovaya-rabota-проверка-киоска', {
    оператор: belongsTo('i-i-s-kursovaya-rabota-оператор', 'Оператор', {
      фИО: attr('Оператор', { index: 0 }),
      кодВхода: attr('Пароль', { index: 1 })
    }, { index: -1, hidden: true }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-фотокиоск', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    картЗаправ: attr('Картридж заправлен', { index: 3 }),
    бумага: attr('Бумага есть', { index: 4 }),
    датаПроверки: attr('Дата проверки', { index: 5 }),
    времяПроверки: attr('Время проверки', { index: 6 }),
    готовКРаботе: attr('Готов к работе', { index: 7 })
  });
};
