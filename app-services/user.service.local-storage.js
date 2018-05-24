(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$timeout', '$filter', '$q'];
    function UserService($timeout, $filter, $q) {

        var service = {};
        function GetByUsername(username) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), { username: username });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }

        function getUsers() {
            if(!localStorage.users){
                localStorage.users = JSON.stringify([
                    {
                        id: 1,
                        username: 'admin',
                        password: 'admin123',
                        firstName: 'Amir',
                        lastName: 'Khan'
                    },
                    {
                        id: 2,
                        username: 'guest',
                        password: 'guest123',
                        firstName: 'Prateek',
                        lastName: 'Gowtham'
                    }
                ]);
            }

            return JSON.parse(localStorage.users);
        }

        service.GetByUsername = GetByUsername;

        return service;
    }
})();