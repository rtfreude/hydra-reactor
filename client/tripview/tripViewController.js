<<<<<<< HEAD
angular.module('tripViewModule', ['hydraApp']).controller('tripViewController', ['$scope', '$location', '$http', 'User', function($scope, $location, $http, User) {
  $scope.userData = User.userData;
  $scope.newTrip = User.newTrip;
  $scope.user_id = $scope.userData.value['_id'];
  $scope.setTrip = User.setTrip;
  $scope.go = User.go;
  // $scope.newSignUp = User.newSignUp;
=======
angular.module('tripViewModule', ['hydraApp']).controller('tripViewController', ['$scope', '$http', 'User', function($scope, $http, User) {

>>>>>>> ae078c355c5815149011d3127ff9708196f43df4
}]);
