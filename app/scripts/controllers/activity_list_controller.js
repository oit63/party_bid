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
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.create_activity = '创建活动';
        //跳转到“创建活动”页面
        $scope.go_create_activity = function(){
            $location.path('create_activity');};
        //跳转到“活动登陆”页面
        $scope.go_activity_sign_up = function(name){
            $location.path('activity_sign_up');};
        //读取活动
        if(localStorage.length==!0)
            {
                $scope.activities=JSON.parse(localStorage['activityKey'] || "[]");
            }
        else
            {
                $location.path('/create_activity');
            }

    });

/**
 * Created by TanghaoTsui on 14-7-15.
 */
