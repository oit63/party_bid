/**
 * Created by TanghaoTsui on 14-7-15.
 */


angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location, $routeParams) {
        Initialization.sign_up_sms_data();

        $scope.init_show_which_btn = function () {
            var running_activity = Activity.find_running_activity();
            if (running_activity && running_activity.name === $routeParams.activity_name) {
                $scope.show_which_btn = "end";
            }
            if (!running_activity) {
                $scope.show_which_btn = "active_start";
            }
            if (running_activity && running_activity.name !== $routeParams.activity_name) {
                $scope.show_which_btn = "disabled_start";
            }
        };
        $scope.init_show_which_btn();


        //-----------------------------------------//
        //读取滤过的报名信息,并实时刷新
        $scope.refresh = function () {
            $scope.informations = sms_data_filted();//读取并过滤本地的报名信息,并和到view层的数组绑定里
            //-----------------------------------------//
            //初始化页面中“报名”字样显示
            if (is_sms_belongs_activity_has_signed_yet())//假如该活动已经进行过报名，并存有数据，会显示人数
            {
                $scope.in_signed_state = "signed_yet_or_ing";
                if ($scope.informations) {
                    $scope.informationNumber = $scope.informations.length;
                } else {
                    $scope.informationNumber = "0";
                }
            }
            else if (localStorage['state'] == "running") //假如该活动在报名，字样显示人数
            {
                $scope.in_signed_state = "signed_yet_or_ing";
                if ($scope.informations) {
                    $scope.informationNumber = $scope.informations.length;
                } else {
                    $scope.informationNumber = "0";
                }
            }
            else//假如该活动既没存数据也不在报名的时候，都不会显示人数
            {
                $scope.in_signed_state = "not_signed";
            }
        }
        $scope.refresh();

        $scope.go_activity_list = function () {
            Activity.find_by_name($routeParams.activity_name).change_attribute("is_choosed", false);
            $location.path('/activity_list');
        };
        $scope.start_activity = function () {
            $scope.show_which_btn = "end";
            Activity.find_by_name($routeParams.activity_name).change_attribute("state", "running");
        };
        $scope.stop_activity = function () {
            if (confirm("报名结束确认?")) {
                Activity.find_by_name($routeParams.activity_name).change_attribute("state", "stop");
                $scope.show_which_btn = "active_start";
            }
        };
    })

//---------------------------------------------------//
//函数的声明和实现
//-----------------------------------------//
//读取并过滤本地的报名信息
function sms_data_filted() {
    var sms_result = [];
    var sms_data_filter = JSON.parse(localStorage['sms_data']);

    for (var i = 0; i < sms_data_filter.length; i++) {
        if (localStorage['yourChoice'] == JSON.stringify(sms_data_filter[i].activity)) {
            sms_result.unshift(sms_data_filter[i]);
        }
        else {
//            console.log("遍历的时候这句话会出现相应次数，不是当前活动的报名信息，将不予过滤,不予显示");
        }
    }
    return sms_result;
}
