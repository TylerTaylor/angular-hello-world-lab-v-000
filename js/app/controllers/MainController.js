function MainController($scope) {
  $scope.name = 'Tyler'
  $scope.email = 'e@mail.com'
  $scope.phone = '555-555-5555'
}

angular
  .module('app')
  .controller('MainController', MainController);