/**
 * Created by TanghaoTsui on 14-7-15.
 */

 
angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location) {
        //-----------------------------------------//
        //初始化前提数据
        Initialization.sign_up_sms_data();
        Initialization.sign_up_state ();

        //-----------------------------------------//
        //初始化按钮
        var in_state_flag = Initialization.sign_up_in_state_flag();
        switch(in_state_flag){
            case "recieving" : $scope.in_state = "recieving";
                break;
            case "grey" : $scope.in_state = "grey";
                break;
            case "end" : $scope.in_state = "end";
                break;
        }
        console.log(localStorage['yourChoice']);
        //-----------------------------------------//
        //读取滤过的报名信息,并实时刷新
		$scope.refresh = function ()
		{
            $scope.informations = sms_data_filted();//读取并过滤本地的报名信息,并和到view层的数组绑定里
            //-----------------------------------------//
            //初始化页面中“报名”字样显示
            if(is_sms_belongs_activity_has_signed_yet())//假如该活动已经进行过报名，并存有数据，会显示人数
            {
                $scope.in_signed_state ="signed_yet_or_ing";
                if($scope.informations)
                {
                    $scope.informationNumber = $scope.informations.length;
                }else
                {
                    $scope.informationNumber = "0";
                }
            }
            else if(localStorage['state'] == "running") //假如该活动在报名，字样显示人数
            {
                $scope.in_signed_state ="signed_yet_or_ing";
                if($scope.informations)
                {
                    $scope.informationNumber = $scope.informations.length;
                }else
                {
                    $scope.informationNumber = "0";
                }
            }
            else//假如该活动既没存数据也不在报名的时候，都不会显示人数
            {
                $scope.in_signed_state ="not_signed";
            }
        }
		$scope.refresh();
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
	var sms_result = [];
    var sms_data_filter = JSON.parse(localStorage['sms_data']);

    for (var i = 0; i < sms_data_filter.length;i++) 
    {
        if(localStorage['yourChoice'] == JSON.stringify( sms_data_filter[i].activity ))
        {
            sms_result.unshift(sms_data_filter[i]);
        }
        else
        {
//            console.log("遍历的时候这句话会出现相应次数，不是当前活动的报名信息，将不予过滤,不予显示");
        }
    }
	 return sms_result;
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
//-----------------------------------------//

