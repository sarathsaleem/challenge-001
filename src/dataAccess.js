/* global CONFIG*/
define([
    'jquery',
    'knockout'
], function ($, ko) {
    /**
     * This is the Data Access Layer for communicating with the backend.
     */
    function DAL() {

        var baseUrl = 'https://private-anon-7a0a80fddc-surveysmock.apiary-mock.com/api';


        function request(options, cb) {
            var scope = null, // get rid of scope, handle that in request calling context
                base = ko.utils.extend({
                    url: baseUrl,
                    method: 'GET'
                }, options);

            base.success = function (data, status, xhr) {
                if (cb) {
                    cb.call(scope, null, data, status, xhr);
                }
            };
            base.error = function (xhr, status, error) {
                if (cb) {
                    cb.call(scope, error, null, status, xhr);
                }
            };

            if (!('processData' in base)) {
                // This is so we send a JSON request body as JSON
                base.processData = (base.method === 'GET');
            }

            if (!base.processData && typeof base.data === 'object') {
                // As above, this is to send a JSON request body
                base.data = JSON.stringify(base.data);
                base.contentType = 'application/json';
            }

            $.ajax(base);
        }


        this.getAvaliableSurveys = function (cb) {
            request({
                url : baseUrl + '/surveys'
            }, cb);
        };

        this.getSurveyDetails = function (id, cb) {
            request({
                url : baseUrl + '/surveys/' + id
            }, cb);
        };

        this.submitCurrentSurvey = function (id, data, cb) {
            request({
                method : 'POST',
                url : baseUrl + '/surveys/' + id + '/completions',
                data : data
            }, cb);
        };

    }

    return DAL;
});
