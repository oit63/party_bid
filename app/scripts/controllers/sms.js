//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm 仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
//        console.log(phone, message);

    },

    receive_message: function (json_message) {

        console.log(json_message.messages[0].message);
        var sms_data = JSON.parse(localStorage['sms_data'] || '[]');
        var message = {};
        message.message = json_message.messages[0].message;
        message.phone = json_message.messages[0].phone;
        message.activity = JSON.parse(localStorage['currentActive']);
        sms_data.push(message);
        localStorage.setItem("sms_data",JSON.stringify(sms_data));
        var wrapper = angular.element(document.getElementById('wrapper')).scope();
        wrapper.$apply(function () {
            wrapper.refresh();
        });

        if(localStorage['state'] == '开始')
        {
            console.log("活动尚未开始，请稍后");
        }
        else
        {
            console.log("报名成功!");
        }
        var log = console.log("报名成功!");
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
            var sms_data = JSON.parse(localStorage['sms_data'] || '[]');
            //message中转站
                message.message = json_message.messages[0].message;
                message.phone = json_message.messages[0].phone;
                message.activity = JSON.parse(localStorage['currentActive']);
                sms_data.push(message);
            localStorage.setItem("sms_data",JSON.stringify(sms_data));
//            var tmp = {
//                "messages": [
//                    {
//                        "create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013",
//                        "message":"bm 仝键",
//                        "phone":"18733171780"
//                    }
//                ]
//            };
            //
//          var sms_list = JSON.parse(localStorage['currentActive'] || '[]');

        }
    },

    process_received_message: function (json_message)
    {
//        native_accessor.send_sms(phone, message);
        console.log("报名成功!");
    }
};

function delete_space(message){
    return message.messages[0].message.replace(/\s/g,'');
}

function is_bm_message(message){
    if(message.search(/bm/i)==0)
    {
        return true;
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
