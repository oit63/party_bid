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
        if(localStorage.length = 1) {
            $scope.startFlag = "开始";
        }
        if(localStorage.length > 1){
            $scope.startFlag = "结束";
        }
      $scope.go_activity_list = function(){
            $location.path('/activity_list');};

    })