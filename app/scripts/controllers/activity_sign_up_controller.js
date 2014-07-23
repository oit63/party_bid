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
        $scope.go_activity_list = function(){
            $location.path('/activity_list');};

        $scope.state = function(){
            var state = localStorage.getItem('state')|| "开始";
            if(state == "开始")
            {
                state = "结束";
                $scope.stateButton = "结束" ;
            }
            else{
                state = "开始"
                $scope.stateButton = "开始" ;
            }
            localStorage.setItem('state', state);
//            if(state){$scope.stateButton = "结束";}
//            else{$scope.stateButton = "开始";}
//            if($scope.stateButton = "结束")
//            {$scope.stateButton = "开始";}
//            if($scope.stateButton = "开始")
//            {$scope.stateButton = "结束";}
            var currentActive = localStorage.getItem('yourChoice');
            localStorage.setItem('currentActive', currentActive);
            $location.path('activity_sign_up');
        };
        $scope.stateButton = localStorage['state'] || "开始";

    })