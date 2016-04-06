import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
