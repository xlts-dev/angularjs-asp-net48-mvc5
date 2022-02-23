angular.module('app').directive('testDirective', TestDirective);

TestDirective.$inject = ['$log'];

function TestDirective($log) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'WebApp/Directives/test.directive.html',
    controllerAs: 'vm',
    controller: function () {
      var vm = this;
      vm.version = $().jquery;
      $log.info('test-directive initialized...');
    },
  };
}
