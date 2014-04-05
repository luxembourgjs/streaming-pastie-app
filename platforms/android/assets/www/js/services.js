angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pasties', function() {
  var pasties = [];

  return {
    refresh: function(){
      $.getJSON("http://streaming-pastie.herokuapp.com/pasties.json", null, function(data){
        pasties = data;
      })
    },
    all: function() {
      return pasties;
    },
    get: function(pastieId) {
      return pasties.filter(function(pastie){return pastie.id == pastieId;})[0];
    },
    add: function(text, url) {
      $.post("http://streaming-pastie.herokuapp.com/pasties.json", {"pastie[text]":text, "pastie[image_url]":url}, function(data){
        pasties.unshift(data);
      })
    }
  }
});
