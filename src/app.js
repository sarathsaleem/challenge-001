define(['knockout', 'jquery' , './dataAccess', './surveys/viewModel'], function (ko, $, DataAccess, ViewModel) {
    "use strict";

    function ChallageApp() {

        this.appName = ko.observable('Challenge App 001');

        this.dal = new DataAccess();

        this.viewModel = new ViewModel(this.dal);

        //
        this.surveys = this.viewModel.model.avaliableSurveys;
    }


    var Challenge_001 = new ChallageApp();

    $(function () {
        ko.applyBindings(Challenge_001.viewModel);
    });

});
