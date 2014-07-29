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
        $scope.isShowEscapeButton = Activity.activityKeyYou();
        $scope.goToActivityListPage = function () {
            $location.path('/activityList')
        };
        $scope.CreateAnActivity = function (inputedString) {
            console.log("apply success");
            if (Activity.isRepeat(inputedString)) {
                $scope.tips = "活动名称有重复，请重新输入！"
            }else{
                clickToSetActivityList(inputedString);
                console.log("ff");
                $location.path('/activitySignUp')
            }

        };
    });



