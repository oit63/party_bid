/**
 * Created by TanghaoTsui on 14-7-24.
 */
activity = {};
activity_array = {};

function Activity() {

}

Activity.getAllItems = function () {
    return JSON.parse(localStorage.getItem('activityList')) || [];
};

Activity.saveAllItems = function (activity_list) {
    localStorage.setItem("activityList", JSON.stringify(activity_list));
};

Activity.update_global_status = function (status, name) {
    localStorage.setItem("activity_status", status);
    localStorage.setItem("activity_name", name);
};

Activity.get_current_item = function () {
    return localStorage.getItem("activity_name") || "Null";
};

Activity.add_new_item = function(activity_name, activity_time) {
    var activity_list = Activity.get_all_items();
    activity_list.splice(0,0,{name:activity_name, createdAt:activity_time.toString(), status:"prepare"});
    Activity.save_all_items(activity_list);

    Activity.update_global_status("prepare", activity_name);
};

Activity.check_ifnot_null = function () {
    var activity_list = Activity.get_all_items();
    return !_.isEmpty(activity_list);
};

Activity.check_if_repeat = function (activity_name) {
    var activity_list = Activity.get_all_items();
    return !!(_.findWhere(activity_list, {name: activity_name}));
};

Activity.is_running = function (activity_name) {
    var activity_list = Activity.get_all_items();
    return !!(_.findWhere(activity_list, {name: activity_name, status: "run"}));
};

Activity.start_activity = function (activity_name) {
    var activity_list = Activity.get_all_items();

    _.findWhere(activity_list, {name: activity_name}).status = "run";
    Activity.save_all_items(activity_list);

    Activity.update_global_status("run", activity_name);
};

Activity.stop_activity = function (activity_name) {
    var activity_list = Activity.get_all_items();

    _.findWhere(activity_list, {name: activity_name}).status = "over";
    Activity.save_all_items(activity_list);

    Activity.update_global_status("over", activity_name);
};

Activity.one_in_progress = function () {
    var activity_list = Activity.get_all_items();
    return !!(_.findWhere(activity_list, {status: "run"}));
};