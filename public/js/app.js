(function() {
  "use strict";

  angular
    .module("robotWarehouse", [
      "ui.router",
      "robots"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("robotIndex", {
        url: "/robots",
        templateUrl: "js/robots/index.html",
        controller: "RobotIndexController",
        controllerAs: "RobotIndexViewModel"
      });
      // .state("robotShow", {
      //   url: "/robots/:id",
      //   templateUrl: "js/robots/show.html",
      //   controller: "RobotShowController",
      //   controllerAs: "RobotShowViewModel"
      // });
  }

})();