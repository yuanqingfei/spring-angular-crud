(function () {
    'use strict';

    angular
        .module('app.transfer')
        .controller('TransferController', TransferController);

    TransferController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Transfer',
        'TableSettings',
        'TransferForm'];
    /* @ngInject */
    function TransferController(logger,
        $stateParams,
        $location,
        Transfer,
        TableSettings,
        TransferForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Transfer);
        vm.transfer = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = TransferForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Transfer object
            var transfer = new Transfer(vm.transfer);

            // Redirect after save
            transfer.$save(function(response) {
                logger.success('Transfer created');
                $location.path('transfer/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Transfer
        vm.remove = function(transfer) {

            if (transfer) {
                transfer = Transfer.get({transferId:transfer.id}, function() {
                    transfer.$remove(function() {
                        logger.success('Transfer deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.transfer.$remove(function() {
                    logger.success('Transfer deleted');
                    $location.path('/transfer');
                });
            }

        };

        // Update existing Transfer
        vm.update = function() {
            var transfer = vm.transfer;

            transfer.$update(function() {
                logger.success('Transfer updated');
                $location.path('transfer/' + transfer.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewTransfer = function() {
            vm.transfer = Transfer.get({transferId: $stateParams.transferId});
            vm.setFormFields(true);
        };

        vm.toEditTransfer = function() {
            vm.transfer = Transfer.get({transferId: $stateParams.transferId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            logger.info('Activated Transfer View');
        }
    }

})();
