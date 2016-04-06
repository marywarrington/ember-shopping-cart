import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed("shoppingCart.items", function() {
    var orderPrice = 0;
    for (var i = 0; i < this.get('shoppingCart.items.length'); i++) {
      orderPrice += this.get('shoppingCart.items')[i].get('price');
    }
    console.log(orderPrice);
    return orderPrice;
  })
});
