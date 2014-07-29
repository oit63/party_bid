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
        isApplicationfirstRun() ? $location.path('activityCreate') : "";

        $scope.goToActivityCreate = function(){
            $location.path('activityCreate');
        };

        $scope.clickForDetail = function(HostsLatestChoice){
            Activity.set_yourChoice(HostsLatestChoice);
            $location.path('activitySignUp');
        };

        $scope.activityListInMemory = Activity.get_activity_Key();

        $scope.ActivedActivity = Activity.get_current_active();
    });

/**
 * Created by TanghaoTsui on 14-7-15.
 */
