import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-фотокиоск.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-фотокиоск.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотокиоскE', 'i-i-s-kursovaya-rabota-фотокиоск', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('ФотокиоскL', 'i-i-s-kursovaya-rabota-фотокиоск', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
