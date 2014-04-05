angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pasties', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pasties = [
    { id: 0, text: 'Scruff McGruff', image_url: 'http://i.imgur.com/elfooqt.gif', created_at: '2 minutes ago' },
    { id: 1, text: 'G.I. Joe', image_url: '', created_at: '5 minutes ago'  },
    { id: 2, text: 'copy me', image_url: 'http://i.imgur.com/elfooqt.gif'  },
    { id: 3, text: 'wow check this out', image_url: 'http://i.imgur.com/elfooqt.gif'  }
  ];

  return {
    all: function() {
      return pasties;
    },
    get: function(pastieId) {
      // Simple index lookup
      return pasties[pastieId];
    },
    add: function(text, url) {
      pasties.unshift({id: pasties.length, text:text, url:url})
    }
  }
});
