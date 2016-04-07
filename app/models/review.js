import DS from 'ember-data';

export default DS.Model.extend({
  reviewer: DS.attr(),
  review: DS.attr(),
  product: DS.belongsTo('product', { async: true })
});
