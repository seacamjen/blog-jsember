import Ember from 'ember';

export default Ember.Component.extend({
  isContentShowing: false,
  actions: {
    contentShow : function() {
      this.set('isContentShowing', true);
    },
    contentHide : function() {
      this.set('isContentShowing', false);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this Post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
