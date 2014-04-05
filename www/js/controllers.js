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
  $scope.pasties = Pasties.all();
})

.controller('PastieDetailCtrl', function($scope, $stateParams, Pasties) {
  $scope.pastie = Pasties.get($stateParams.pastieId);
})

.controller('AccountCtrl', function($scope) {
});
