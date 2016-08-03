import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        deleteChat: function(id){
            this.store.findRecord('chat', id).then(function(chat){
                chat.deleteRecord();
                chat.save();
            });
        }
    }
});
