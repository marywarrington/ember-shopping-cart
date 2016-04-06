import Ember from 'ember';

export default Ember.Component.extend({
  addItem: false,
  actions: {
    itemFormShow() {
      this.set('addItem', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('addItem', false);
      this.sendAction('save', params);
    }
  }
});
