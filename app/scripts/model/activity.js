/**
 * Created by TanghaoTsui on 14-7-24.
 */
activity = {};
activity_array = {};
function Activity() {
}


Activity.set_activity_list = function (activityKey) {
    localStorage.setItem("activityKey", JSON.stringify(activityKey));
};
Activity.get_activity_Key = function () {
    return JSON.parse(localStorage.getItem('activityKey'));
};

Activity.set_current_active = function (activityKey) {
    localStorage.setItem("activityKey", JSON.stringify(activityKey));
};
Activity.get_current_active = function () {
    return JSON.parse(localStorage.getItem('currentActive')) || [];
};

Activity.set_yourChoice = function (yourChoice) {
    localStorage.setItem("yourChoice", JSON.stringify(yourChoice));
};


Activity.activityKeyYou = function () {
    if (localStorage.length !== 0)
        return true;
    else
        return false;
};

Activity.isRepeat = function (inputedString) {
    var ArrayActivityNameInMemory = this.get_activity_Key() ;
    var isRepeat = 0;
    for (var i = 0; i < ArrayActivityNameInMemory.length; i++) {
        if (ArrayActivityNameInMemory[i] == inputedString) {
            isRepeat = true;
        }
    }
    return isRepeat;
    console.log("repeat success")
};

