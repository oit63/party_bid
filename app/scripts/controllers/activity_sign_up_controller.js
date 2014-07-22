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
//activeflag为0则代表活动尚未开始，为1则代表活动进行中
        if(localStorage.getItem('activeFlag') == 1)
            {
                $scope.startFlag = "结束";
                //yourchoice和currentactive相等代表当前报名页面可以正常使用，否则显示
                if (localStorage.getItem('yourChoice') == (localStorage.getItem('currentActive')))
                    {

                    }
                else
                {
                    $scope.startFlag = "开始";
                    $scope.disableFlag = 1;
                }
            }
        else
            {
                $scope.startFlag = "开始";
            }


        $scope.start = function(){
            if(localStorage.getItem('activeFlag') == 1)
            {
                if(confirm("Do you really want to leave?"))
                {
                    localStorage.setItem('activeFlag', 0);
                }
            }
            else
            {

                var currentActive = localStorage.getItem('yourChoice');
                localStorage.setItem('currentActive', currentActive);
                localStorage.setItem('activeFlag', 1);
                localStorage.setItem('activeFlag', activeFlag);
                $location.path('activity_sign_up');
            }
        };


    })