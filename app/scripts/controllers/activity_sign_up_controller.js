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
                if(confirm("报名结束确认?"))
                {
                    state = "开始"
                    $scope.stateButton = "开始";
                }
            }
            localStorage.setItem('state', state);
            var currentActive = localStorage.getItem('yourChoice');
            localStorage.setItem('currentActive', currentActive);
            $location.path('activity_sign_up');
        };
        $scope.stateButton = localStorage['state'] || "开始";
        if((localStorage['state'] == "结束") && (localStorage.getItem('currentActive') == localStorage.getItem('yourChoice')) ) //在currentactive不存在为假
        {
            $scope.disFlag = true;
        }
        console.log($scope.disFlag);
    })
