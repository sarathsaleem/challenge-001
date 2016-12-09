define(['knockout', 'jquery', './dataAccess', './surveys/viewModel'], function(ko, $, DataAccess, Surveys) {
    "use strict";

    function ChallengeApp() {

        this.appName = ko.observable('Challenge App 001');

        this.dal = new DataAccess();

        this.surveysView = new Surveys(this.dal);

        /*
         * Load API data
         */
        this.surveysView.load();
    }


    var Challenge_001 = new ChallengeApp();

    $(function() {
        ko.applyBindings(Challenge_001);
    });

});
