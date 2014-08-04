'use strict';
angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {
        //初始化数据
        //-----------------------------------------//
        Initialization.list();
        $scope.act = Initialization.list_style();
        $scope.go_create_activity = function()
        {
            $location.path('create_activity');
        };
        $scope.go_activity_sign_up = function(activity)
        {
            Activity.set_yourChoice(activity);
            $location.path('activity_sign_up');
        };
        if(Activity.sign_up.state_is_running())
        {
            $scope.currentActivityResult = Activity.sign_up.get_currentActive();
        }
        $scope.activities = Activity.get_activityKey();
    });

/**
 * Created by TanghaoTsui on 14-7-15.
 */
