import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-коррекция', 'Unit | Serializer | i-i-s-kursovaya-rabota-коррекция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-коррекция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-вид-носителя',
    'transform:i-i-s-kursovaya-rabota-выбор-вида',
    'transform:i-i-s-kursovaya-rabota-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
