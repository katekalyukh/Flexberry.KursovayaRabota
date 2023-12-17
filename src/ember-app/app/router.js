import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-клиент-l');
  this.route('i-i-s-kursovaya-rabota-клиент-e',
  { path: 'i-i-s-kursovaya-rabota-клиент-e/:id' });
  this.route('i-i-s-kursovaya-rabota-клиент-e.new',
  { path: 'i-i-s-kursovaya-rabota-клиент-e/new' });
  this.route('i-i-s-kursovaya-rabota-оператор-l');
  this.route('i-i-s-kursovaya-rabota-оператор-e',
  { path: 'i-i-s-kursovaya-rabota-оператор-e/:id' });
  this.route('i-i-s-kursovaya-rabota-оператор-e.new',
  { path: 'i-i-s-kursovaya-rabota-оператор-e/new' });
  this.route('i-i-s-kursovaya-rabota-оплата-l');
  this.route('i-i-s-kursovaya-rabota-оплата-e',
  { path: 'i-i-s-kursovaya-rabota-оплата-e/:id' });
  this.route('i-i-s-kursovaya-rabota-оплата-e.new',
  { path: 'i-i-s-kursovaya-rabota-оплата-e/new' });
  this.route('i-i-s-kursovaya-rabota-печать-фото-l');
  this.route('i-i-s-kursovaya-rabota-печать-фото-e',
  { path: 'i-i-s-kursovaya-rabota-печать-фото-e/:id' });
  this.route('i-i-s-kursovaya-rabota-печать-фото-e.new',
  { path: 'i-i-s-kursovaya-rabota-печать-фото-e/new' });
  this.route('i-i-s-kursovaya-rabota-проверка-киоска-l');
  this.route('i-i-s-kursovaya-rabota-проверка-киоска-e',
  { path: 'i-i-s-kursovaya-rabota-проверка-киоска-e/:id' });
  this.route('i-i-s-kursovaya-rabota-проверка-киоска-e.new',
  { path: 'i-i-s-kursovaya-rabota-проверка-киоска-e/new' });
  this.route('i-i-s-kursovaya-rabota-фотокиоск-l');
  this.route('i-i-s-kursovaya-rabota-фотокиоск-e',
  { path: 'i-i-s-kursovaya-rabota-фотокиоск-e/:id' });
  this.route('i-i-s-kursovaya-rabota-фотокиоск-e.new',
  { path: 'i-i-s-kursovaya-rabota-фотокиоск-e/new' });
});

export default Router;
