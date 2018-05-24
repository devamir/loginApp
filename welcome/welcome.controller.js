(function () {
    'use strict';

    angular
        .module('app')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$location'];
    function WelcomeController($location) {
        var vm = this;

        vm.redirectToLogIn = function () {
            $location.path('/login');
        }
    }

})();
