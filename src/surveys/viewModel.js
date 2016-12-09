/* global CONFIG*/
define([
    'jquery',
    'knockout',
    './model',
    './questionModel',
], function(_ignore, ko, SurveyModel, QuestionsModel) {

    function SurveysViewModel(dal) {

        var that = this;

        this.model = new SurveyModel(dal);

        this.surveys = this.model.avaliableSurveys;

        this.inQuestionScreen = ko.observable(false);
        this.inSuccessScreen = ko.observable(false);

        /*
         * Switch screen
         */
        this.setSurveysView = function() {
            that.inQuestionScreen(false);
            that.inSuccessScreen(false);
            that.validate(true);
        };

        this.validate = ko.observable(true);

        this.currentSurvey = {
            id: ko.observable(''),
            title: ko.observable(''),
            tagline: ko.observable(''),
            questions: ko.observableArray([]),
            submit: function() {
                var currentSurveydata = that.getCurrentAnswers();

                if (currentSurveydata.error && that.validate()) {
                    return;
                }

                that.model.submitCurrentSurvey(currentSurveydata.id, currentSurveydata.answers, that.showSuccessScreen);

            }
        };

        this.getSurveyDetails = function(data) {
            that.model.getSurveyDetails(data.id, function(questionDetails) {
                that.setCurrentSurvey(questionDetails);
                that.inQuestionScreen(true);
            });
        };

        this.showSuccessScreen = function() {
            that.inSuccessScreen(true);
        };

        /*
         * Initial load , calling from application
         */
        this.load = function() {
            this.model.getAvaliableSurveys();
        };


    }


    SurveysViewModel.prototype.setCurrentSurvey = function(data) {
        var questions = data.questions.map(function(question) {
            question = new QuestionsModel(question);
            return question;
        });
        this.currentSurvey.id(data.id);
        this.currentSurvey.title(data.title);
        this.currentSurvey.tagline(data.tagline);
        this.currentSurvey.questions(questions);
    };

    SurveysViewModel.prototype.setSurveyDetails = function(data) {
        this.currentSurvey.title(data.survey.title);
        this.currentSurvey.title(data.survey.tagline);
        this.currentSurvey.questions(data.survey.questions);
    };

    /*
     *
     * Get current selected data and set validation
     *
     */
    SurveysViewModel.prototype.getCurrentAnswers = function() {
        var answers = {
            "completion": []
        };

        var vaildationError = false;

        this.currentSurvey.questions().forEach(function(question) {
            if (!question.value()) {
                vaildationError = true;
                question.validationError(true);
            } else {
                question.validationError(false);
                answers.completion.push({
                    question_id: question.id,
                    value: question.value()
                });
            }
        });

        return {
            id: this.currentSurvey.id(),
            answers: answers,
            error: vaildationError
        };
    };

    return SurveysViewModel;
});
