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
    add: function(text, fileURI) {
      $.post("http://streaming-pastie.herokuapp.com/pasties.json", {"pastie[text]":text}, function(data){
        pasties.unshift(data);

        if (fileURI){

          var options = new FileUploadOptions();
          options.fileKey = "file";
          options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
          options.mimeType = "image/png";
          options.params = {_method: "patch"};

          var ft = new FileTransfer();
          ft.upload(fileURI, encodeURI("http://streaming-pastie.herokuapp.com/pasties/" + data.id + ".json"),
            function(){
              console.log("Success! " + arguments[0]);
            }, function(){
              console.log("Failure! " + arguments[0])
            }, options);
        }
      })

    }
  }
});
