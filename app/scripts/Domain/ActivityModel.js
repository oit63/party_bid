/**
 * Created by TanghaoTsui on 14-8-2.
 */

var Activity = {

};
Activity.is_repeat = function (name)
{
    var list_json= JSON.parse(localStorage['activityKey'] || '[]');
    for(var i = 0;i<list_json.length;i++)
    {
        if (list_json[i] == name) {
            return true;
        }
    }
    return false

},
Activity.send_message_on_repeat = function ()
{
    return "活动名称有重复，请重新输入！"
},

Activity.unshift = function (name)
{
    var result_list= Activity.get_activityKey();
    result_list.unshift(name);
    Activity.set_activityKey(result_list)
},

Activity.set_yourChoice = function (activity)
{
    localStorage['yourChoice'] = JSON.stringify(activity);
},

Activity.get_activityKey = function ()
{
    return JSON.parse(localStorage['activityKey']);
},
Activity.set_activityKey = function (activities)
{
    localStorage['activityKey'] = JSON.stringify(activities);
},

Activity.is_state_null = function ()
{
    return Boolean(localStorage['state']);
}
Activity.sign_up = function ()
{

},

Activity.sign_up.state_is_running = function ()
{
    return Boolean((localStorage['state']== "running"))
},

Activity.sign_up.get_currentActive = function ()
{
    return JSON.parse(localStorage['currentActive'])
}

