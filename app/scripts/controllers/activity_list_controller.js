'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {
        //判断有没有存过数据
        if(!localStorage.length)
        {
            $location.path('/create_activity');
        }
        //初始化数据
        if(!localStorage['activityKey'])
        {
            localStorage['activityKey'] = [];
        }
        //-----------------------------------------//
        $scope.go_create_activity = function()
        {
            $location.path('create_activity');
        };
        $scope.go_activity_sign_up = function(event)
        {
            localStorage['yourChoice'] = JSON.stringify(event);
            $location.path('activity_sign_up');
        };
        if(is_sign_up_running())
        {
            $scope.currentActivityResult = JSON.parse(localStorage['currentActive'])
        }
        $scope.activities = JSON.parse(localStorage['activityKey']);
    });

function is_sign_up_running()
{
    if(localStorage['state']== "running")
    {
        return true;
    }
    else
    {
        return false;
    }
}
/**
 * Created by TanghaoTsui on 14-7-15.
 */
