/**
 * Created by TanghaoTsui on 14-8-2.
 */


function Activity (name, state, is_choosed) {
    this.name       = name;
    this.state      = state || "un_start";
    this.is_choosed = is_choosed || true;
}

Activity.prototype.save = function () {
    var activities = Activity.get_activities();
    activities.unshift(this);
    Activity.save_activities(activities);
};

Activity.prototype.change_attribute = function (attribute, value) {
    var self = this;
    var activities = Activity.get_activities();
    _(activities).find(function (activity) {
        return activity.name === self.name;
    })[attribute] = value;
    Activity.save_activities(activities);
};

Activity.get_activities = function() {
    return JSON.parse(localStorage.getItem("activities"));
};

Activity.save_activities = function(activities) {
    localStorage.setItem("activities", JSON.stringify(activities));
};

Activity.find_by_name = function (activity_name) {
  var found_activity = _(Activity.get_activities()).find(function (activity) {
      return activity.name === activity_name;
  });
  return new Activity(found_activity.name, found_activity.state, found_activity.is_choosed);
};

Activity.find_running_activity = function () {
    return  _(Activity.get_activities()).find(function (activity) {
        return activity.state === "running";
    });
};

Activity.is_repeat = function (activity_name) {
    return _(Activity.get_activities()).some(function (activity) {
        return activity.name === activity_name;
    });GF
};

Activity.send_message_on_repeat = function ()
{
    return "活动名称有重复，请重新输入！"
};
