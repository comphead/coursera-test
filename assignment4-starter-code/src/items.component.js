(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/itemlist.template.component.html',
  bindings: {
    items: '<'
  }
});

})();
