(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;
  var items = [];

  service.getAllCategories = function () {
    console.log("All categories");
    return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")}
      );
  };

  service.getItemsForCategory = function (categoryShortName) {
    console.log(categoryShortName);
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
            category: categoryShortName
        }
    });
  };
}

})();
