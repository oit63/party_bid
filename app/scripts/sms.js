'use strict';


//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm 仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {


    send_sms: function (phone, message) {


//         this.send_sms({"receivers":[{"phone":phone}]}, {"message_content":message});
//        native_access.send_sms({"receivers": [
//            {"name": 'name', "phone": phone}
//        ]}, {"message_content": message});
        console.log(phone, message);

    },




    receive_message: function (source_message) {


        if (typeof this.process_received_message === 'function') {
            this.process_received_message(source_message);

        }

    },




    process_received_message: function (source_message) {


	    MessageProcessor.PROCESS_NEW_MESSAGE(source_message);

    }

};




function notify_message_received(message_json) {


    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;

}
