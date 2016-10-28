(function () {

angular.module('common')
.controller('SignupController', SignupController);
SignupController.$inject = ['MenuService', 'RegistrationService'];

function SignupController(MenuService, RegistrationService) {
  var signup = this;

  signup.submit = function () {
    signup.completed = true;
    MenuService.getMenuItemByShortName(signup.user.menunumber)
    .then(function(result){
       if (result) {
          signup.user.menuitem = result;
          RegistrationService.saveUser(signup.user);
          signup.msg = "Your information saved"
       } else {
         signup.msg = "No such number menu exists";
       }
    })
    .catch(function(e){
      signup.msg = false;
    });
  };
}

})();
