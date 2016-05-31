(function() {
    'use strict';

    angular
        .module('app.transfer')
        .factory('Transfer', Transfer);

    Transfer.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Transfer($resource, API_BASE_URL) {

        var params = {
            transferId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/transfers/:transferId';

        return $resource(API_URL, params, actions);

    }

})();
