import { test } from 'qunit';
import moduleForAcceptance from 'movie-review/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | movie list');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/movies');
  });
});
