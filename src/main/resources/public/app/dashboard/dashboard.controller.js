(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'transfer',
            description: 'generator-angular-crud allows creating entities ' +
                          'and CRUD operations very productively for AngularJS applications'
        };
        vm.messageCount = 0;
        vm.transfer = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getTransfer()];
            return $q.all(promises).then(function() {
                //logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getTransfer() {
            return dataservice.getTransfer().then(function (data) {
                vm.transfer = data;
                return vm.transfer;
            });
        }
    }
})();
