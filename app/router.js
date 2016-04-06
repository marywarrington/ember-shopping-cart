import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('category', {path: '/category/:category_id'});
  this.route('view-cart');
  this.route('product-detail', {path: '/product-detail/:product_id'});
  this.route('about');
  this.route('admin');
});

export default Router;
