/**
 * Created by TanghaoTsui on 14-7-14.
 */
'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('activityCreateController', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.isShowEscapeButton = Activity.isFilledInActivityList()
        $scope.goToActivityList = function () {
            $location.path('/activityList')
        };
        $scope.setActivityList = function (inputedString) {
            if (Activity.isRepeat(inputedString)) {
                $scope.tips = "活动名称有重复，请重新输入！"
            }else{
                clickToSetActivityList(inputedString);
                $location.path('/activitySignUp')
            }

        };


    });

