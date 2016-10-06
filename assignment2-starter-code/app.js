(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buy = function(itemIndex) {
      ShoppingListCheckOffService.buy(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    this.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [{name: 'cookies', quantity: 10}, {name: 'chips', quantity: 5}, {name: 'beer', quantity: 20}, {name: 'noodles', quantity: 5}, {name: 'beef chips', quantity: 10}];
    var boughtItems = [];

    this.getToBuyItems = function () {
      return toBuyItems;
    };

    this.getBoughtItems = function () {
      return boughtItems;
    };

    this.buy = function(itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    }

}

})();
