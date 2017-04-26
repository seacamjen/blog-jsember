import Ember from 'ember';

var posts = [{
  id: 1,
  author: "Johnny Evans",
  title: "Hyndman Hope",
  content: "Hyndman is doing so well with the Rangers right now. He is starting and scoring tons of goals. He is making waves and building great transfer rumors",
  img: "http://www3.pictures.zimbio.com/gi/Emerson+Hyndman+Fulham+U18+v+Reading+U18+fOhpJK3VLCal.jpg"
}, {
  id: 2,
  author: "Henry Boes",
  title: "Pulisic Time",
  content: "Pulisic is doing so well with the Rangers right now. He is starting and scoring tons of goals. He is making waves and building great transfer rumors",
  img: "http://img.bleacherreport.net/img/article/media_slots/photos/002/646/801/bfdf26d3ccee33a484b7808451005bcc_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top"
}]

export default Ember.Route.extend({
  model() {
    return posts;
  }
});
