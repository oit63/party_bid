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
        //初始化数据
        if(!localStorage['sms_data'])
        {
            localStorage['sms_data'] = [];
        }
        if(!localStorage['state'])
        {
            localStorage['state'] = "stop";
        }
        //初始化按钮
        if(localStorage['state'] == "running")//有活动在运行
        {
            if(localStorage['currentActive'] == localStorage['yourChoice'])//就是这个活动在运行
            {
                $scope.in_state = "recieving";
            }
            if(localStorage['currentActive'] !== localStorage['yourChoice'])//不是这个活动在运行
            {
                $scope.in_state = "grey";
            }
        }
        else//没有活动在运行
        {
            console.log("1.2")
            $scope.in_state = "end";
        }
        //读取数据
        $scope.informations = sms_data_filted();
        //-----------------------------------------//
        $scope.go_activity_list = function()
        {
            $location.path('/activity_list');
        };
        //-----------------------------------------//
        $scope.disableFlag = judge_grey();
        $scope.get_in_start_state = function()
        {
            $scope.in_state = "recieving";
            localStorage["state"] = "running";
            setCurrentAsChoice();
            //-----------------------------//
            var sms_data_process = JSON.parse(localStorage['sms_data']);
        };
        $scope.get_in_end_state = function()
        {
            if(confirm("报名结束确认?"))
            {
                $scope.in_state = "end";
                localStorage["state"] = "stop";
            }
        };
        //-----------------------------------------//
    })

function sms_data_filted()
{
    var sms_data_filter = JSON.parse(localStorage['sms_data']);
    for (var i = 0; i < sms_data_filter.length; i++)
    {
        if (sms_data_filter[i].activity == JSON.parse(localStorage['yourChoice']))
        {
            var sms_items_result = [];
            sms_items_result.unshift(sms_data_filter[i]);
            return sms_items_result;
        }
        else
        {

            console.log("不是当前活动的报名信息，不用过滤,不会显示");
        }
    }

}

function setCurrentAsChoice()
{
    var currentActive = localStorage.getItem('yourChoice');
    localStorage.setItem('currentActive', currentActive);
}


function judge_grey()
{
    if((localStorage['state'] == "running")&&(localStorage['currentActive'] !== localStorage['yourChoice']))
    {
        return "grey";
    }
    else
    {
        return false;
    }

}