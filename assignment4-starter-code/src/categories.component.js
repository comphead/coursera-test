(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/categorylist.template.component.html',
  bindings: {
    items: '<'
  }
});

})();
