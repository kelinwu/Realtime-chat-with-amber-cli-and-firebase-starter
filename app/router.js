import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chats', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:chat_id'});
  });
});

export default Router;
