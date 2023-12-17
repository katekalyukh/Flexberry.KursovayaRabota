import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видОплаты: DS.attr('i-i-s-kursovaya-rabota-тип-оплаты'),
  времяОплаты: DS.attr('string'),
  датаОплаты: DS.attr('date'),
  печатьФото: DS.belongsTo('i-i-s-kursovaya-rabota-печать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  видОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оплата.validations.видОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оплата.validations.времяОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оплата.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-оплата.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kursovaya-rabota-оплата', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    времяОплаты: attr('Время оплаты', { index: 1 }),
    видОплаты: attr('Вид оплаты', { index: 2 }),
    печатьФото: belongsTo('i-i-s-kursovaya-rabota-печать-фото', 'Печать фото', {
      номерЗаказа: attr('Номер заказа', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номерЗаказа' })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kursovaya-rabota-оплата', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    времяОплаты: attr('Время оплаты', { index: 1 }),
    видОплаты: attr('Вид оплаты', { index: 2 }),
    печатьФото: belongsTo('i-i-s-kursovaya-rabota-печать-фото', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
