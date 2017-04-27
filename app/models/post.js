import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  img: DS.attr(),
  category: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
