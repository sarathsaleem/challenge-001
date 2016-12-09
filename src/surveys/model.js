/* global CONFIG*/
define([
    'jquery',
    'knockout'
], function($, ko) {

    function Surveys(dal) {

        var that = this;

        this.avaliableSurveys = ko.observableArray([]);


        this.getAvaliableSurveys = function() {

            dal.getAvaliableSurveys(function(error, data) {
                if (error) {
                    console.error(error);
                    return;
                }
                if (data.surveys) {
                    that.avaliableSurveys(data.surveys);
                }
            });
        };

        this.getSurveyDetails = function(id, cb) {
            dal.getSurveyDetails(id, function(error, data) {
                if (error) {
                    console.error(error);
                    return;
                }
                if (data.survey) {
                    cb(data.survey);
                }
            });
        };

        this.submitCurrentSurvey = function (id, data, cb) {
             dal.submitCurrentSurvey(id, data, function(error, data) {
                if (error) {
                    console.error(error);
                    return;
                }
                if (data.status === 'ok') {
                    cb(data);
                }
            });
        };

    }

    return Surveys;
});
