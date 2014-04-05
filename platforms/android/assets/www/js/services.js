angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pasties', function() {
  var pasties = [];

  return {
    refresh: function(){
      $.getJSON("http://192.168.1.33:3000/pasties.json", null, function(data){
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
      $.post("http://192.168.1.33:3000/pasties.json", {"pastie[text]":text}, function(data){
        pasties.unshift(data);

        if (fileURI){

          var options = new FileUploadOptions();
          options.fileKey = "file";
          options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
          options.mimeType = "image/png";
          options.params = {_method: "patch"};

          var ft = new FileTransfer();
          ft.upload(fileURI, encodeURI("http://192.168.1.33:3000/pasties/" + data.id + ".json"),
            function(){
              alert("Success! " + arguments[0]);
            }, function(){
              alert("Failure! " + arguments[0])
            }, options);
        }
      })

    }
  }
});
