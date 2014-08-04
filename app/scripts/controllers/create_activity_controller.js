
'use strict';

angular.module('partyBidApp')
    .controller('create_activity_controller', function ($scope, $location)
    {
        Initialization.create_page();
//        $scope.names = Activity.is_activityKey_null();
        $scope.go_activity_list = function()
        {
            $location.path('/activity_list');
        };
        $scope.save_item = function (name)
        {
            if(Activity.is_repeat(name))
            {
                $scope.tips = Activity.send_message_on_repeat();
            }
            else{
                Activity.unshift(name);
                Activity.set_yourChoice(name);
                $location.path('/activity_sign_up')
            }
        }
    });


function shift_event(name)
{
    var list_json= JSON.parse(localStorage['activityKey'] || '[]');
    list_json.unshift(name);
    localStorage['activityKey'] = JSON.stringify(list_json);
}

