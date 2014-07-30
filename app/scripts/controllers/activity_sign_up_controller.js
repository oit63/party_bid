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
        $scope.informations = sms_data_filted();

        //-----------------------------------------//
        $scope.go_activity_list = function()
        {
            $location.path('/activity_list');
        };
        //-----------------------------------------//
        $scope.get_in_start_state = function()
        {
            $scope.in_state = "end";
            localStorage["state"] = "running";
            setCurrentAsChoice();
            //-----------------------------//
            var sms_data_process = JSON.parse(localStorage['sms_data']);

        };
        $scope.get_in_end_state = function()
        {
            if(confirm("报名结束确认?"))
            {
                $scope.in_state = "start";
                localStorage["state"] = "stop";
            }
        };
        //-----------------------------------------//
            $scope.persons_count = "人数（"+ $scope.informations.length + "人）";
        //-----------------------------------------//
    })

function sms_data_filted()
{
    var sms_data_filter = JSON.parse(localStorage['sms_data']);
    for (var i = 0; i < sms_data_filter.length; i++)
    {
        if (sms_data_filter[i].activity == JSON.parse(localStorage['yourChoice'])) {
            var sms_items_result = [];
            sms_items_result.unshift(sms_data_filter[i]);
            return sms_items_result;
        }
        else
        {
            console.log("不是当前活动的报名信息，不用过滤");
        }
    }
}

function setCurrentAsChoice()
{
    var currentActive = localStorage.getItem('yourChoice');
    localStorage.setItem('currentActive', currentActive);
}


function judgeGrey()
{
    if((localStorage['state'] == running))
    {
        if(localStorage['currentActive'] != localStorage['yourChoice'])
        {
            $scope.disFlag = true;
        }
    }
}