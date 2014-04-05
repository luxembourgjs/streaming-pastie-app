angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Pasties) {
  $scope.message = null;
  $scope.text = "";

  $scope.add = function(){
    Pasties.add(this.text, null);
    this.text = "";
    this.message = "Your pastie was published!";
    setTimeout(this.clearMessage.bind(this), 2000);
  };

  $scope.clearMessage = function(){
    this.message = null;
    this.$apply();
  }
})

.controller('PastiesCtrl', function($scope, Pasties) {
  Pasties.refresh();
  $scope.pasties = Pasties.all();

  $scope.refreshPasties = function(){
    Pasties.refresh();
    this.pasties = Pasties.all();
    this.$apply();
  };
  setInterval($scope.refreshPasties.bind($scope), 5000);
})
