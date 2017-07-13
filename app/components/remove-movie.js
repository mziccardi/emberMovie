import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),


  actions:{
    removeMovie(){
      console.log(this.store)
      debugger
    }
  }
});
