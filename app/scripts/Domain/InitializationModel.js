/**
 * Created by TanghaoTsui on 14-8-4.
 */
function Initialization () {

};
Initialization.create_page = function ()
{
    if (!localStorage['activityKey'])
    {
        Activity.set_activityKey([]);
    }
},

Initialization.list = function ()
{
    if (!localStorage['activityKey'])
    {
        $location.path('/create_activity');
    }
},

Initialization.list_style = function ()
    //初始化创建活动按钮样式 “可用”“不可用”
{
    return Boolean(localStorage['state'] == "running")//-有活动在运行
},

Initialization.sign_up_sms_data = function ()
{
    if (!localStorage['sms_data'])
    {
        localStorage['sms_data'] = "[]";
    }
}

Initialization.sign_up_state = function ()
{
    if(!localStorage['state'])
    {
        localStorage['state'] = "stop";
    }
},

Initialization.sign_up_in_state_flag = function ()//初始化右上角按钮样式：“开始”“结束”“不可用”
{
    if(localStorage['state'] == "running")//-有活动在运行
    {
        if(localStorage['currentActive'] == localStorage['yourChoice'])//-就是这个活动在运行
        {
            return "recieving";
        }
        if(localStorage['currentActive'] !== localStorage['yourChoice'])//-不是这个活动在运行
        {
            return "grey";
        }
    }
    else//-没有活动在运行
    {
        return "end";
    }
}

