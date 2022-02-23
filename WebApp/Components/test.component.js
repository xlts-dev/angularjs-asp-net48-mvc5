angular.module('app').component('testComponent', {
  controllerAs: 'vm',
  controller: TestComponent,
  template: '<div class="test-component">AngularJS Version: {{vm.version}}</div>',
  bindings: {},
});

TestComponent.$inject = ['$log'];

function TestComponent($log) {
  var vm = this;
  vm.version = angular.version.full;

  vm.$onInit = function () {
    $log.info('test-component initialized...');
  };
}
