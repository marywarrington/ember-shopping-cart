import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('product', params.product_id);
  },

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    save(params) {
      var newReview = this.store.createRecord('review', params);
      var product = params.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', params.product);
    }
  }
});
