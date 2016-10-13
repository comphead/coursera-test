(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var searchCtrl = this;
    searchCtrl.searchTerm = "";
    searchCtrl.found = [];

    searchCtrl.getMatchedMenuItems = function() {
        MenuSearchService.getMatchedMenuItems(searchCtrl.searchTerm)
        .then(function(result) {
           searchCtrl.found = result;
           console.log(searchCtrl.found);
        });
    };

    searchCtrl.removeItem = function (index) {
      searchCtrl.found.splice(index, 1);
    };

};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var searchSvc = this;

  searchSvc.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")}
      )
      .then(function(result) {
          var foundItems = [];
          var items = result.data.menu_items;
          for (var i = 0; i < items.length; i++) {
            if (items[i].name.indexOf(searchTerm) !== -1) {
              foundItems.push(items[i]);
            }
          }
          return foundItems;
      });
  };
};

 function foundItemsDirective() {
   var ddo = {
     templateUrl: 'menuItem.html',
     scope: {
       onRemove: '&',
       items: '<'
     },
     controllerAs: 'list',
     bindToController: true,
     controller: foundItemsController
   };

   return ddo;
 };

 function foundItemsController () {
   var list = this;

 };

})();
