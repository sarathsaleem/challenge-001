define(['knockout', 'jquery' , './viewModel', './dataAccess'], function (ko, $, ViewModel, DataAccess) {
    "use strict";

    function ChallageApp() {

        this.appName = ko.observable('Challenge App 001');

        this.viewModel = new ViewModel();
    }


    var Challenge_001 = new ChallageApp();

    $(function () {
        ko.applyBindings(Challenge_001.viewModel);
    });

});
