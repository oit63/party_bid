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
        //-----------------------------------------//
        //初始化数据
        if(!localStorage['sms_data'])
        {
            localStorage['sms_data'] = [];
        }
        if(!localStorage['state'])
        {
            localStorage['state'] = "stop";
        }
        //-----------------------------------------//
        //初始化“报名”显示
        console.log("1")
        if(is_sms_belongs_activity_has_signed_yet())//该活动已经进行过报名，并有存储数据，这会显示人数
        {
            $scope.in_signed_state ="signed_yet_or_ing";
        }
        else
        {
            if(localStorage['state'] == "running") //该活动没有报过名，只有开始报名的时候，字样才显示人数
            {
                $scope.in_signed_state ="signed_yet_or_ing";
            }
            else//没存数据或者不在报名的时候，都不会显示人数
            {
                $scope.in_signed_state ="not_signed";
            }
        }
        //-----------------------------------------//
        //初始化按钮
        if(localStorage['state'] == "running")//-有活动在运行
        {
            if(localStorage['currentActive'] == localStorage['yourChoice'])//-就是这个活动在运行
            {
                $scope.in_state = "recieving";
            }
            if(localStorage['currentActive'] !== localStorage['yourChoice'])//-不是这个活动在运行
            {
                $scope.in_state = "grey";
            }
        }
        else//-没有活动在运行
        {
            $scope.in_state = "end";
        }
        //-----------------------------------------//
        //读取数据
        $scope.informations = sms_data_filted();//读取并过滤本地的报名信息,并和到view层的数组绑定里
//        (sms_data_filted().length) ?($scope.informationNumber = sms_data_filted().length) : ($scope.informationNumber =0);//统计当前活动的报名人数，并和到view层相应位置绑定
        //-----------------------------------------//
        //设置函数功能
        $scope.go_activity_list = function()
        {
            $location.path('/activity_list');
        };
        //-----------------------------------------//
        //当前页面的活动开始
        $scope.get_in_start_state = function()
        {
            $scope.in_state = "recieving";//一级准备：将按钮显示为“结束”
            localStorage["state"] = "running";//二级准备：将“state”键的值刷新为"running"
            setCurrentAsChoice();//三级准备：将当前页面的活动名称存到“currentActive”键值对里
            //-----------------------------//
            //活动开始
        };
        //-----------------------------------------//
        $scope.get_in_end_state = function()
        {
            if(confirm("报名结束确认?"))
            {
                clearCurrentAsChoice()//一级脱落：将当前页面的活动名称存到“currentActive”键值对置空
                $scope.in_state = "end";//二级脱落：将按钮显示为“开始”
                localStorage["state"] = "stop";//三级脱落：将“state”键的值刷新为"stop"
            }
        };
    })

//---------------------------------------------------//
//函数的声明和实现
//-----------------------------------------//
//读取并过滤本地的报名信息
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
//-----------------------------------------//
//活动开始三级准备：将当前页面的活动名称存到“currentActive”键值对里
function setCurrentAsChoice()
{
    var currentActive = localStorage.getItem('yourChoice');
    localStorage.setItem('currentActive', currentActive);
}
//-----------------------------------------//
//活动结束三级脱落：将当前页面的活动名称存到“currentActive”键值对里
function clearCurrentAsChoice()
{
    localStorage.setItem('currentActive', "");
}

