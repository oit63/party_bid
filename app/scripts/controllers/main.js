'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var names = [];
        var names=JSON.parse(localStorage['names']);
        if(names.length == 0)
        {
            $location.path('activity_list');
        }
        else
        {
            $location.path('create_activity');
        }

    });
