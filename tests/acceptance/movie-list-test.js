import { test } from 'qunit';
import moduleForAcceptance from 'movie-review/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | movie list');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/movies');
  });
});

test('there should be no movies at first',function(assert){
  visit('/');

  andThen(function(){
    assert.equal(find('.movie').length,0)
    assert.equal(find('.no-movies').text().trim(), 'You have not added any movies. Please add some!')
  })
})


test('The user should be able to create a new movie review', function(assert){
  visit('/');

  andThen(function(){
    assert.equal(currentURL(), '/movies')
  })

  fillIn('.title-input', 'Pootie Tang');
  fillIn('.date-input', '2005');
  fillIn('.review-input', 'Written and directed by Louis CK. HILARIOUS');
  fillIn('.ratings-input', '5');
  click('.submit-new-btn')

  andThen(function(){
    assert.equal(find('.card-movie-title').text().trim(), 'Pootie Tang', 'Should show title')
    assert.equal(find('.card-movie-date').text().trim(), 'Date Released: 2005', 'Should show date')
    assert.equal(find('.card-movie-review').text().trim(), 'Review: Written and directed by Louis CK. HILARIOUS', 'Should show review')
    assert.equal(find('.card-movie-rating').text().trim(), 'Rating: 5 ★', 'Should show rating')
    assert.equal(find('.movie').length, 1)
  })
})
