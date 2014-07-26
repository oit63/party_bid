'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('activityListController', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        if (isApplicationfirstRun()) {
            $location.path('/activityCreate');
        }
        $scope.goToActivityCreate = function(){
            $location.path('activityCreate');};
        $scope.clickForDetail = function(HostsLatestChoice){
            Activity.setLatestChoice(HostsLatestChoice);
            $location.path('activity_sign_up');
        };
        $scope.activityListInMemory = Activity.getActivityList();
        $scope.ActivedActivity = Activity.getActivedActivity();
    });

/**
 * Created by TanghaoTsui on 14-7-15.
 */
