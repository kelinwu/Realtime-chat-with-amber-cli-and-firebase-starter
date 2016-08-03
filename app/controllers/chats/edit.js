import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        editMessage: function(id){
            var self = this;
            var title = this.get('model.title');
            var message = this.get('model.message');
            var date = this.get('model.date');

            //update message
            this.store.findRecord('chat', id).then(function(chat){
                chat.set('title', title);
                chat.set('message', message);
                chat.set('date', new Date(date));

                //save to db
                chat.save();

                self.transitionTo('chats');

            });

        }
    }
});
