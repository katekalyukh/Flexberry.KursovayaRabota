import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодВхода: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  серияПаспорта: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  кодВхода: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оператор.validations.кодВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оператор.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оператор.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оператор.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОператорE', 'i-i-s-kursovaya-rabota-оператор', {
    фИО: attr('ФИО', { index: 0 }),
    серияПаспорта: attr('Серия паспорта', { index: 1 }),
    номерПаспорта: attr('Номер паспорта', { index: 2 }),
    кодВхода: attr('Код входа', { index: 3 })
  });

  modelClass.defineProjection('ОператорL', 'i-i-s-kursovaya-rabota-оператор', {
    фИО: attr('ФИО', { index: 0 }),
    серияПаспорта: attr('Серия паспорта', { index: 1 }),
    номерПаспорта: attr('Номер паспорта', { index: 2 }),
    кодВхода: attr('Код входа', { index: 3 })
  });
};
