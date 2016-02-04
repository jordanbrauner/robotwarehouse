(function () {
  "use strict";

  angular
    .module("robots")
    .controller("RobotShowController", [
      "RobotFactory",
      // "CompanyFactory",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $stateParams) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    this.robot = RobotFactory.get({ id: $stateParams.id });
  }

})();
