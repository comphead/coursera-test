(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  service.currentUser = null;


  service.saveUser = function (user) {
    service.currentUser = user;
  };


  service.getUser = function () {
    return service.currentUser;
  };

}
})();
