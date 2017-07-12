import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions:{
    addMovie(){
      const movie = this.getProperties('title', 'date', 'review');
      this.get('store').createRecord('movie', movie).save()
      .then(()=>{
        this.setProperties({title:'', date:'', review:''})
      })
    }
  }
});
