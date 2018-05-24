(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', 'AuthenticationService', '$location'];
    function HomeController(UserService, $rootScope, AuthenticationService, $location) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            loadCurrentUser();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        vm.logout = function () {
            AuthenticationService.ClearCredentials();
            $location.path('/welcome');
            FlashService.Success("You have successfully logged out");
        };
    }

})();