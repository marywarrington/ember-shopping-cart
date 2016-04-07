import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm() {
      this.set('addNewReview', true);
    },
    save() {
      var params = {
        reviewer: this.get('reviewer'),
        review: this.get('review'),
        product: this.get('product'),
        rating: parseInt(this.get('rating'))
      };
      console.log(params);
      this.set('addNewReview', false);
      this.sendAction('save', params);
    }
  }
});
