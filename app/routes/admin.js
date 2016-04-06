import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    save(params) {
      var newItem = this.store.createRecord('product', params);
      var category = params.category;
      category.get('products').addObject(newItem);
      newItem.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin');
    }
  }
});
