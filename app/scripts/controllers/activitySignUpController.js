/**
 * Created by TanghaoTsui on 14-7-15.
 */


angular.module('partyBidApp')
    .controller('sign_up_controller', function ($scope, $location) {
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
                    localStorage.setItem('currentActive', '[]');
                }
            }
            localStorage.setItem('state', state);
            var currentActive = localStorage.getItem('yourChoice');
            localStorage.setItem('currentActive', currentActive);
            $location.path('activity_sign_up');

        };

        $scope.stateButton = localStorage['state'] || "开始";//设计接口 在改变按钮字样
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
                $scope.stateButton = "开始"
                console.log($scope.stateButton);
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
                for (var indexer = 0; indexer < JSON.parse(localStorage['sms_data']).length; indexer++) {
                    if (sms_items[indexer].activity == JSON.parse(localStorage['yourChoice'])) {
                        sms_items_filted.push(sms_items[indexer]);
                    }
                }
                $scope.sms_items = sms_items_filted;
                if($scope.sms_items.length )
                {
                    $scope.persons_count = "人数（"+ $scope.sms_items.length + "人）";
                }
            }

        }
        $scope.refresh();

    })

