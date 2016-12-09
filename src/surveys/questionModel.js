/* global CONFIG*/
define([
    'jquery',
    'knockout'
], function($, ko) {

    function Question(data) {

        //validate data if any

        var value = ko.observable();
        var validationError = ko.observable(false); // indicate the border color for the question box

        value.subscribe(function() {
            validationError(false);
        });

        /*
         * return data object with value and validation
         */

        return {
            id: data.id,
            title: data.title,
            options: data.options,
            value: value,
            validationError: validationError

        };

    }

    return Question;
});
