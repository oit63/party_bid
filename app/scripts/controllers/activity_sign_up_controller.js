/**
 * Created by TanghaoTsui on 14-7-15.
 */


angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.startButton = "开始";
        $scope.go_activity_list = function(){
            $location.path('/activity_list');};
        $scope.start = function(){
            var currentActive = localStorage.getItem('yourChoice');
            localStorage.setItem('currentActive', currentActive);
            $location.path('activity_sign_up');
            if($scope.startButton = "开始")
            {
                $scope.startButton = "结束";
            }
            else
            {
                $scope.startButton = "开始";
            }


        };


    })