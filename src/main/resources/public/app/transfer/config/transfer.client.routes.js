(function() {
    'use strict';

    angular
        .module('app.transfer')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listTransfer',
                config: {
                    url: '/transfer',
                    templateUrl: 'app/transfer/views/list.html',
                    controller: 'TransferController',
                    controllerAs: 'vm',
                    title: 'List Transfers',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Transfers'
                    }
                }
            },
            {
                state: 'createTransfer',
                config: {
                    url: '/transfer/create',
                    templateUrl: 'app/transfer/views/create.html',
                    controller: 'TransferController',
                    controllerAs: 'vm',
                    title: 'Create Transfer'
                }
            },
            {
                state: 'viewTransfer',
                config: {
                    url: '/transfer/:transferId',
                    templateUrl: 'app/transfer/views/view.html',
                    controller: 'TransferController',
                    controllerAs: 'vm',
                    title: 'View Transfer'
                }
            },
            {
                state: 'editTransfer',
                config: {
                    url: '/transfer/:transferId/edit',
                    templateUrl: 'app/transfer/views/edit.html',
                    controller: 'TransferController',
                    controllerAs: 'vm',
                    title: 'Edit Transfer'
                }
            }
        ];
    }
})();
