//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm 仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
          native_access.send_sms({"receivers":[{"phone":phone}]}, {"message_content":message});
//        console.log(phone, message);

    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function')
        {
            this.process_received_message(json_message)
        }
    },

    process_received_message: function (json_message)
    {
        var result_name_origin = json_message.messages[0].message.replace(/\s/g,'');
        var result_name = result_name_origin.toLowerCase();
        if(result_name.substring(0,2)=="bm")
        {
            var result_phone = json_message.messages[0].phone;
            if(isRepeat(result_phone))
            {
                console.log("已收到报名信息，请勿重复报名")
            }
            else
            {
                result_name = result_name.slice(2);
                var result_activity = JSON.parse(localStorage['currentActive']);
                var result_message = {};
                result_message.name = result_name;
                result_message.phone = result_phone;
                result_message.activity = JSON.parse(localStorage['currentActive']);
                var result_sms_data;
                result_sms_data.push(result_message);
                localStorage.setItem("sms_data",JSON.stringify(result_sms_data));
                native_accessor.send_sms(result_message.phone, "报名成功");
                console.log("报名成功!");
                //刷新
                var wrapper = angular.element(document.getElementById('wrapper')).scope();
                wrapper.$apply(function () {
                wrapper.refresh();
                });

            }
        }
    }
};


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
    var current_activity = JSON.parse(localStorage['currentActive']);
    var sms_data_users = JSON.parse(localStorage[sms_data]);
    for(var i=0;i<sms_data_users.length;i++){
        if (sms_data_users[i].phone==phone) {
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
