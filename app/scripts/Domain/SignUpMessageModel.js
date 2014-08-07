'use strict';


/**
 * Created by TanghaoTsui on 14-8-5.
 */




function SignUpMessage(message_name, message_phone, activity_name) {


    this.message_name  = message_name  || undefine;
    this.message_phone = message_phone || undefine;
    this.activity_name = activity_name || undefine;

}



SignUpMessage.prototype.save = function () {


    var signUpMessages = SignUpMessage.get_messages();
    signUpMessages.unshift(this);
    SignUpMessage.save_messages(signUpMessages);

};




SignUpMessage.get_messages = function () {


    return JSON.parse(localStorage.getItem("signUpMessages"));

};




SignUpMessage.save_messages = function (signUpMessages) {


    localStorage.setItem("signUpMessages", JSON.stringify(signUpMessages));

};




SignUpMessage.get_messages_choosed = function (activity_name) {


    return _(SignUpMessage.get_messages()).where({activity_name: activity_name});

};




SignUpMessage.get_messages_activity_running = function () {


    return _(SignUpMessage.get_messages()).where({activity_name: Activity.find_running_activity().name})

};




SignUpMessage.is_repeat = function (message_phone) {

    return _(SignUpMessage.get_messages_activity_running()).some(function(signUpMessage) {


															        return (signUpMessage.message_phone === message_phone);

															    })

};