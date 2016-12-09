/* global CONFIG*/
define([
    'jquery',
    'knockout'
], function($, ko) {

    function Question(data) {

        //validate data if any

        var value = ko.observable();
        var validationError = ko.observable(false);

        value.subscribe(function(){
            validationError(false);
        });

        return {
            id : data.id,
            title : data.title,
            options : data.options,
            value : value,
            validationError : validationError

        };

    }

    return Question;
});
