/**
 * Created by TanghaoTsui on 14-7-24.
 */
activity = {};
activity_array = {};
function Activity() {
}


Activity.setActivityList = function (activityList) {
    localStorage.setItem("activityList", JSON.stringify(activityList));
};
Activity.getActivityList = function () {
    return JSON.parse(localStorage.getItem('activityList'));
};

Activity.setActivedActivity = function (ActivedActivity) {
    localStorage.setItem("ActivedActivity", JSON.stringify(ActivedActivity));
};
Activity.getActivedActivity = function () {
    return JSON.parse(localStorage.getItem('ActivedActivity')) || [];
};

Activity.setHostsLatestChoice = function (HostsLatestChoice) {
    localStorage.setItem("HostsLatestChoice", JSON.stringify(HostsLatestChoice));
};


Activity.isFilledInActivityList = function () {
    if (localStorage.length != 0)
        return true;
    else
        return false;
};

Activity.isRepeat = function (inputedString) {
    var ArrayActivityNameInMemory = this.getActivityList() ;
    var isRepeat = 0;
    for (var i = 0; i < ArrayActivityNameInMemory.length; i++) {
        if (ArrayActivityNameInMemory[i] == inputedString) {
            isRepeat = true;
        }
    }
    return isRepeat;
    console.log("repeat success")
};

