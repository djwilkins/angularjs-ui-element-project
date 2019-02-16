var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope) {
    $scope.myCurrentAge = 25;
    $scope.myCostOfLiving = 100;
    $scope.myCurrentSavings = 1000;
    $scope.showHideToggleArray = {
        myCurrentAge: true,
        myCostOfLiving: true,
        myCurrentSavings: true
    };

    /* The showHideToggleFunc method toggles input fields between input and display modes.
    It accepts the id of the input field as a parameter and uses it to update
    The input fields corresponding showHideToggleArray value, which in turn informs
    one or the other in the pair of display and input elements being visible through ng-show and ng-hide. */
    $scope.showHideToggleFunc = function(id) {
        // Toggle value for id in
        $scope.showHideToggleArray[id] = !$scope.showHideToggleArray[id];
        // Timeout required for this focus to work effectively:
        window.setTimeout(function ()
        {
            document.getElementById(id).focus();
        }, 0);
        // Also: Capture current value in lastValue variable (will revert to if user hits escape):
        $scope.lastValue = $scope[id];
    }

    $scope.checkIfKeyWasPressed = function($event, id){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13 || keyCode == 27) {
            // if escape key pressed, revert back to lastValue:
            if (keyCode == 27) {
                $scope[id] = $scope.lastValue;
            }
            /* For whatever reason, using a setTimeout function to wrap this blur method call
            Prevents an AngularJS apply already in progress error that links to here: https://code.angularjs.org/1.3.1/docs/error/$rootScope/inprog?p0=$apply */
            window.setTimeout(function () {
                document.getElementById(id).blur();
            }, 0);
            }
      };


});