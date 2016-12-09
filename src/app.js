define(['knockout', 'jquery' , './dataAccess', './surveys/viewModel'], function (ko, $, DataAccess, Surveys) {
    "use strict";

    function ChallageApp() {

        this.appName = ko.observable('Challenge App 001');

        this.dal = new DataAccess();

        this.surveysView = new Surveys(this.dal);
        this.surveysView.load();
    }


    var Challenge_001 = new ChallageApp();

    $(function () {
        ko.applyBindings(Challenge_001);
    });

});
