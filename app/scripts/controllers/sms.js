//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm 仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
//          this.send_sms({"receivers":[{"phone":phone}]}, {"message_content":message});
        console.log(phone, message);

    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function')
        {
            this.process_received_message(json_message)
        }
    },

    process_received_message: function (json_message)
    {
        var result_phone = json_message.messages[0].phone;
        var result_name_origin = json_message.messages[0].message.replace(/\s/g,'');
        var result_name = result_name_origin.toLowerCase();
        //-----------------------------------------------//
        if(result_name.substring(0,2)=="bm")
        {
            if(is_in_start_state())
            {
                if(isRepeat(result_phone))
                {
                    native_accessor.send_sms(result_phone, "已收到报名信息，请勿重复报名");
                }
                else
                {
                    result_name = result_name.slice(2);
                    store_result_data(result_name,result_phone);
                    native_accessor.send_sms(result_phone, "恭喜!报名成功");
                    //刷新
                    var wrapper = angular.element(document.getElementById('wrapper')).scope();
                    wrapper.$apply(function () {
                    wrapper.refresh();
                    });
                }
            }
            else
                {
                    if(is_sms_belongs_activity_has_signed_yet())
                    {
                        native_accessor.send_sms(result_phone, "Sorry,活动报名已结束");
                    }
                    else
                    {
                        native_accessor.send_sms(result_phone, "活动尚未开始,请稍后");
                    }
                }
        }
        else
        {
            native_accessor.send_sms(result_phone, "短信发送格式不属于报名范畴!");
        }
    }
};

function store_result_data(result_name,result_phone)
{
    var result_activity = JSON.parse(localStorage['currentActive']);
    var result_message = {};
    result_message.name = result_name;
    result_message.phone = result_phone;
    result_message.activity = JSON.parse(localStorage['currentActive']);
     //---------------------------------------------------------------//
    var result_sms_data = JSON.parse(localStorage['sms_data']);
    result_sms_data.unshift(result_message);
    localStorage.setItem("sms_data",JSON.stringify(result_sms_data));
}

function is_in_start_state()
{
   return localStorage.getItem("state")=="running"? true:false;

}

function delete_space(message)
{
    return message.messages[0].message.replace(/\s/g,'');
}

function is_bm_message(message)
{
    if(message.search(/bm/i)==0)
    {
        return true;
    }
    return false;

}

function isRepeat(phone)
{
    var sms_data_index = JSON.parse(localStorage["sms_data"]);
    for(var i=0;i<sms_data_index.length;i++){
        if (sms_data_index[i].phone==phone) {
            return true;
        };
    }
    return false;
}

function is_sms_belongs_activity_has_signed_yet()
{
    var sms_data_index = JSON.parse(localStorage["sms_data"]);
    for(var i=0;i<sms_data_index.length;i++){
        if (JSON.stringify(sms_data_index[i].activity) == localStorage.getItem("yourChoice")) {
            return true;
        };
    }
    return false;
}

function notify_message_received(message_json) {
//    console.log(JSON.stringify(message_json));
//    console.log(message_json.messages[0]);
//    console.log(message_json.messages[0].name);
//    console.log(message_json.messages[0].phone);
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}

//var activitiesData = {
//    save_activities: function (json_message)
//    {
//
//    }
//
//
//};
