import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      products: this.store.findAll('product')
    });
  },

  actions: {
    save(params) {
      var newItem = this.store.createRecord('product', params);
      var category = params.category;
      category.get('products').addObject(newItem);
      newItem.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
