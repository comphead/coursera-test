(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.output = "";
  $scope.input = "";

  $scope.calcFoodStatus = function () {

    $scope.output = $scope.input ? ($scope.input.split(',').length <=3 ? "Enjoy!" : "Too much!") : "Please enter data first";
    console.log($scope);
  };
}

})();
