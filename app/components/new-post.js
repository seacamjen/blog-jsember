import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        img: this.get('img'),
        category: this.get('category'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
