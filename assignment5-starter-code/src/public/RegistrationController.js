(function () {

angular.module('common')
.controller('RegistrationController', RegistrationController);
RegistrationController.$inject = ['MenuService', 'user'];

function RegistrationController(MenuService, user) {
  var reg = this;
  reg.user = user;

  console.log(user);
}

})();
