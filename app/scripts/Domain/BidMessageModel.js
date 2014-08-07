'use strict';


/**
 * Created by TanghaoTsui on 14-8-7.
 */


function BidMessage (message_name, message_phone, activity_name) {


	this.message_name  = message_name  || undefine;
	this.message_phone = message_phone || undefine;
	this.activity_name = activity_name || undefine;

}




BidMessage.get_messages = function () {


	return JSON.parse(localStorage.getItem("signUpMessages"));

};




BidMessage.save_messages = function (signUpMessages) {


	localStorage.setItem("signUpMessages", JSON.stringify(signUpMessages));

};




BidMessage.prototype.save = function () {


	var bidMessages = BidMessage.get_messages();
	bidMessages.unshift(this);
	BidMessage.save_messages(signUpMessages);

};




BidMessage.get_messages_choosed = function (activity_name) {


	return _(BidMessage.get_messages()).where({activity_name: activity_name});

};




SignUpMessage.get_messages_activity_running = function () {


	return _(BidMessage.get_messages()).where({activity_name: Activity.find_running_activity().name})

};