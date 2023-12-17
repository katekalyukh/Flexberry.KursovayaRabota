import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-оплата', 'Unit | Model | i-i-s-kursovaya-rabota-оплата', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-клиент',
    'model:i-i-s-kursovaya-rabota-коррекция',
    'model:i-i-s-kursovaya-rabota-оператор',
    'model:i-i-s-kursovaya-rabota-оплата',
    'model:i-i-s-kursovaya-rabota-печать-фото',
    'model:i-i-s-kursovaya-rabota-проверка-киоска',
    'model:i-i-s-kursovaya-rabota-фотокиоск',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
