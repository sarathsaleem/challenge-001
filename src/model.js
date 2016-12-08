/* global CONFIG*/
define([
    'jquery',
    'knockout',
    'dataAccess'
], function ($, ko, dal) {

    function Surveys() {


        this.avaliableSurveys = ko.observableArray([]);


        this.getAvaliableSurveys = function () {

            dal.getAvaliableSurveys(function (error, data) {
                if (error) {
                    console.error(error);
                    return;
                }
                if (data.surveys) {
                    this.avaliableSurveys(data);
                }
            });
        };

    }

    return Surveys;
});
