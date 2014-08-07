'use strict';


function MessageProcessor() {

}


MessageProcessor.is_bm_type = function (source_message, trimed_message) {


    MessageProcessor.get_message_name(source_message);
    return trimed_message.replace(/\s/g, '');

};




MessageProcessor.trim_message = function (source_message) {


    return source_message.replace(/\s/g, '');

};




MessageProcessor.get_message_detail = function (source_message) {


    this.message_detail = source_message.messages[0].message;

};




MessageProcessor.get_message_phone = function (source_message) {


    this.message_phone = source_message.messages[0].phone;

};




MessageProcessor.get_message_type = function (trimed_message) {


    this.message_type = trimed_message.substring(0, 2).toLowerCase();

};




MessageProcessor.PROCESS_NEW_MESSAGE = function (source_message) {


	var trim_message = MessageProcessor.trim_message(source_message.messages[0].message);
	var message_phone = source_message.messages[0].phone;
	var message_type = trim_message.substring(0, 2).toLowerCase();
	var message_type_varier = {


		bm: function () {


			if (Activity.is_has_running()) {


				var message_name = trim_message.slice(2);
				return MessageProcessor.process_registe_message(message_name, message_phone);

			}




			if (Activity.find_choosed_activity()) {


				var statement = {
					'stop': 'Sorry,活动已结束',
					'un_start': 'Sorry,活动尚未开始'

				};
				return native_accessor.send_sms(message_phone, statement[Activity.find_choosed_activity().state]);

			}
			native_accessor.send_sms(message_phone, 'Sorry,活动尚未开始或已结束');

		}

	};




	if (message_type_varier[message_type]) {


		return message_type_varier[message_type]();

	}
	native_accessor.send_sms(message_phone, '短信发送格式不属于报名范畴!');

};




MessageProcessor.process_registe_message = function (message_name, message_phone) {


    if (SignUpMessage.is_repeat(message_phone)) {


        return native_accessor.send_sms(message_phone, '已收到报名信息，请勿重复报名');

    }
    var signUpMessage = new SignUpMessage(message_name, message_phone, Activity.find_running_activity().name);
    signUpMessage.save();
    native_accessor.send_sms(message_phone, '恭喜!报名成功');
	MessageProcessor.refresh();

}




MessageProcessor.refresh = function () {


	var scope = angular.element(document.getElementById('WRAPPER_REGISTER_PAGE')).scope();
	scope.$apply(function () {


		scope.refresh();

	});

}