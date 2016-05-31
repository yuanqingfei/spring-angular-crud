(function() {
    'use strict';

    angular
        .module('app.transfer')
        .factory('TransferForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'id',
                    type: 'input',
                    templateOptions: {
                        label: 'Id:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'doctor',
                    type: 'input',
                    templateOptions: {
                        label: 'Doctor Name:',
                        disabled: disabled
                    }
                },
                {
                    key: 'sender',
                    type: 'input',
                    templateOptions: {
                        label: 'Sender Name:',
                        disabled: disabled
                    }
                },
                {
                    key: 'receiver',
                    type: 'input',
                    templateOptions: {
                        label: 'Receiver Name:',
                        disabled: disabled
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
