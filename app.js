var app = angular.module('app', []);

app.controller("firstCtrl", function ($scope) {
// ON EMIT EXAMPLE
    $scope.$on('eventName', function (event, args) {
        $scope.message = args.message;
        console.log($scope.message);
    });
//BROADCAST EXAMPLE
    $scope.handleClick = function (msg) {
        $scope.$broadcast('eventName', { message: msg });
        };
});

app.controller("secondCtrl", function ($scope) {
// ON EMIT EXAMPLE
    $scope.handleClick = function (msg) {
        $scope.$emit('eventName', { message: msg });
    };
//BROADCAST EXAMPLE
    $scope.$on('eventName', function (event, args) {
        $scope.message = args.message;
        console.log($scope.message);
    });
});

