/* global CONFIG*/
define([
    'jquery',
    'knockout',
    './model'
], function ($, ko, Model) {

    function SurveysViewModel(dal) {

        var that = this;

        this.model = new Model(dal);

        this.model.getAvaliableSurveys();

        this.surveys = this.model.avaliableSurveys;

        this.getSurveyDetails = function(data) {
           that.model.getSurveyDetails(data.id, function () {

           });
        };

        this.currentSurvey = {
            title  : ko.observable(''),
            tagline :  ko.observable(''),
            questions : ko.observable()
        };

    }

    SurveysViewModel.prototype.setSurveyDetails = function (data) {
        this.currentSurvey.title(data.survey.title);
        this.currentSurvey.title(data.survey.tagline);
        this.currentSurvey.questions(data.survey.questions);
    };

    return SurveysViewModel;
});
