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

        $scope.start = function(){
            if(localStorage.getItem('activeFlag') == 1) {
                if(confirm("Do you really want to leave?"))
                {
                    localStorage.setItem('activeFlag', 0);
                }

            }
            else{
                //读取选择的活动  字典
                var currentActive = localStorage.getItem('yourChoice');
                //设置激活的活动  字典
                localStorage.setItem('currentActive', currentActive);
                //设置开始标志位
                localStorage.setItem('activeFlag', 1);
                //设置激活标志位的字典
                localStorage.setItem('activeFlag', activeFlag);
                $location.path('activity_sign_up');
            }
        };
        if(localStorage.getItem('yourChoice')==(localStorage.getItem('currentActive')))
        {
            //利用标记位判断该活动是否在进行
            if (localStorage.getItem('activeFlag') == 1) {
                $scope.startFlag = "结束";
            }
            else {
                $scope.startFlag = "开始";
            }
        }
        else
        {
            if (localStorage.getItem('activeFlag') == 0) {
                $scope.startFlag = "结束";
            }
            else {
                $scope.startFlag = "开始";
            }
            $scope.startFlag = "开始";
            $scope.disableFlag = 1;
        }
        $scope.go_activity_list = function(){
            $location.path('/activity_list');};
    })