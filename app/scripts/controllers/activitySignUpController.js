/**
 * Created by TanghaoTsui on 14-7-15.
 */


angular.module('partyBidApp')
    .controller('activitySignUpController', function ($scope, $location) {
        SignUp.init();


        //前提参数设置
        //get_choice
        //get_sms_message
        //get_current_activity
        //get_state
        //get_currentActivity

        //set_state
        //set_currentActivity
        $scope.goToActivityListPage = function(){
            $location.path('/activity_list');
        };

        $scope.start_sign_up = function()
        {
            if(SignUp.get_state() == "开始")
            {
                var startSigningUpButtonText = "结束"
                $scope.startSigningUpButtonText = "结束"
                SignUp.set_state(startSigningUpButtonText)
            }
            else{
                if(confirm("报名结束确认?"))
                {
                    startSigningUpButtonText = "开始";
                    $scope.stateButtonText = "开始";
                    localStorage.setItem('currentActive', '[]');
                }
            }
            localStorage.setItem('startSigningUpButtonText', startSigningUpButtonText);
            var currentActive = localStorage.getItem('yourChoice');
            localStorage.setItem('currentActive', currentActive);
            $location.path('activity_sign_up');
        };
        $scope.stateButtonText = localStorage['state'] || "开始";//设计接口 在改变按钮字样
        //点过一次上面了
        // 按钮变灰
        if((localStorage['state'] == 0))
        { }
        else if((localStorage['state'] == '结束'))
        {
            if(localStorage.getItem('currentActive') == localStorage.getItem('yourChoice'))
            {

            }
            else
            {
                console.log('开始');
                $scope.stateButtonText = "开始"
                console.log($scope.stateButtonText);
                $scope.disFlag = true;
                //设计接口改变按钮字样
            }
        }
        else
        {
            if((localStorage['state'] == '结束') && localStorage.getItem('currentActive') != localStorage.getItem('yourChoice'))
            {

            }
        }

        //读取数据
        $scope.refresh = function ()
        {
            var sms_items = JSON.parse(localStorage['sms_data'] || '[]' );
            console.log(localStorage['sms_data'] != '[]');
            if(localStorage['sms_data'] != '[]')
            {

                var sms_items_filted = [];//定义过滤器，性质为对象数组
                for (var i = 0; i < JSON.parse(localStorage['sms_data']).length; i++) {
                    if (sms_items[i].activity == JSON.parse(localStorage['yourChoice'])) {
                        sms_items_filted.push(sms_items[i]);
                    }
                }
                $scope.smsItems = sms_items_filted;
                if($scope.smsItems.length )
                {
                    $scope.persons_count = "人数（"+ $scope.smsItems.length + "人）";
                }
            }

        }
        $scope.refresh();

    })

