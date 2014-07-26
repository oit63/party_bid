/**
 * Created by TanghaoTsui on 14-7-26.
 */
function clickToSetActivityList(inputedString) {
        console.log("function clickToSetActivityList click")
        var ArrayActivityNameInMemory = Activity.getActivityList();
        ArrayActivityNameInMemory.unshift(inputedString);
        Activity.setActivityList(ArrayActivityNameInMemory);
        localStorage.setItem('yourLastChoice', JSON.stringify(inputedString));
}

function isApplicationfirstRun(inputedString) {
    return !Activity.isFilledInActivityList();
}