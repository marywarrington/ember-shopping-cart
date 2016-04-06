import Ember from 'ember';

export default Ember.Component.extend({
  deleteItem: false,
  actions: {
    deleteItem() {
      this.set('deleteItem', true);
    }
  }
});
