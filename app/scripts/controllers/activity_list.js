'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('ListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.create_activity = '创建活动';
        //跳转到“创建活动”页面
        $scope.go_create_activity = function(){
            $location.path('create_activity');};
        //读取活动
        $scope.activities=JSON.parse(localStorage['names']);
    });

/**
 * Created by TanghaoTsui on 14-7-15.
 */
