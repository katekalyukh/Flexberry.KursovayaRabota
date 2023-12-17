import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видФото: DS.attr('i-i-s-kursovaya-rabota-выбор-вида'),
  количество: DS.attr('number'),
  номерЗаказа: DS.attr('number'),
  носитель: DS.attr('i-i-s-kursovaya-rabota-вид-носителя'),
  клиент: DS.belongsTo('i-i-s-kursovaya-rabota-клиент', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya-rabota-фотокиоск', { inverse: null, async: false }),
  коррекция: DS.hasMany('i-i-s-kursovaya-rabota-коррекция', { inverse: 'печатьФото', async: false })
});

export let ValidationRules = {
  видФото: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.видФото.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  коррекция: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-печать-фото.validations.коррекция.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФотоE', 'i-i-s-kursovaya-rabota-печать-фото', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    видФото: attr('Вид фото', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-фотокиоск', 'Фотокиоск', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    клиент: belongsTo('i-i-s-kursovaya-rabota-клиент', 'Клиент', {
      iD: attr('ID', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'iD' }),
    коррекция: hasMany('i-i-s-kursovaya-rabota-коррекция', 'Коррекция', {
      кадрирование: attr('Кадрирование', { index: 0 }),
      чБЦвет: attr('Ч б цвет', { index: 1 })
    })
  });

  modelClass.defineProjection('ПечатьФотоL', 'i-i-s-kursovaya-rabota-печать-фото', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    видФото: attr('Вид фото', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-фотокиоск', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya-rabota-клиент', 'ID', {
      iD: attr('ID', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
