(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.angular);
    }
}(this, function (angular) {
    var moduleName = 'vivify-ideas.angular-on-load';
    var mod = angular.module(moduleName, []);
    mod.directive('viOnLoad', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                callback: '&onLoad'
            },
            link: function (scope, element, attrs) {
                element.on('load', function () {
                    return scope.$apply(function () {
                        scope.callback();
                    });
                });
            }
        }
    }]);

    return moduleName;
}));