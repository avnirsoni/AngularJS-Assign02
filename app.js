(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuy = this;

  toBuy.itemsToBuy = ShoppingListService.getItemsToBuy();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListService.buyItem( itemIndex);
    // console.log("items bought", ShoppingListService.getItemsBought());
  };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var alBought = this;

  alBought.itemsBought = ShoppingListService.getItemsBought();
}

function ShoppingListService() {
  var service = this;

  var itemsToBuy = [];
  var itemsBought = [];

  var anItem = {
    name: "Pencils",
    quantity: 10
  };
  itemsToBuy.push(anItem);
  anItem = {
    name: "Erasers",
    quantity: 2
  };
  itemsToBuy.push(anItem);
  anItem = {
    name: "Sharpener",
    quantity: 1
  };
  itemsToBuy.push(anItem);
  anItem = {
    name: "Rulers",
    quantity: 2
  };
  itemsToBuy.push(anItem);
  anItem = {
    name: "Pens",
    quantity: 2
  };
  itemsToBuy.push(anItem);
  anItem = {
    name: "Crayons",
    quantity: 20
  };
  itemsToBuy.push(anItem);

  service.getItemsToBuy = function() {
    return itemsToBuy;
  };

  service.getItemsBought = function() {
    return itemsBought;
  }

  service.buyItem = function(itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };
}

})();
