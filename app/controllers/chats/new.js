import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addMessage: function(){
            var title = this.get('title');
            var message = this.get('message');
            var date = this.get('date');

            //create new message
            var newMessage = this.store.createRecord('chat', {
                title : title,
                message: message,
                date: new Date(date)
            });

            //save to db
            newMessage.save();

            //clear form
            this.setProperties({
                title: '',
                message: '',
                date: ''
            });
        }
    }
});
