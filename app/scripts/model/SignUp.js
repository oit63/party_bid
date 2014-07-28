/**
 * Created by TanghaoTsui on 14-7-28.
 */

var SignUp = function () {
    SignUp.init = function (){
        if(!this.getChoice())
            Init(HostsLatestChoice);
        if(!this.getMessageList())
            Init(ShortMessageList)
    },

    this.getChoice = function (){
        return HostsLatestChoice.getChoice();
    },

    this.getSigning = function (){
        return SigningUpActivity.getName();
    },

    this.getMessageList = function (){
        return ShortMessageList.getList();
    },

    this.set_state = function (state) {
        localStorage.setItem('state', state);
    },

    this.get_state = function () {
        var state = localStorage.getItem('state') || "开始";
        return state;
    },

    this.is_signing_up = function () {
        return this.getState() == "开始" ? true : false;
    },

    this.set_current_active = function () {
        localStorage.setItem('currentSigningActivity', '[]');
    }

};

