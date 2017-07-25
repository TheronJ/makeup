angular.module("makeUp", [ "makeUp.controllers", "ui.router","angularSpinners",'ui.bootstrap'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider

            .when("", "/entry");

        $stateProvider
            .state("entry", {
                url: "/entry",
                templateUrl: "views/entry.html",
                controller: "entryCtrl",
            })

              $stateProvider
            .state("Cosmetic", {
                url: "/Cosmetic",
                templateUrl: "views/Cosmetic.html",
                controller: "cosmeticCtrl",
            })

              $stateProvider
            .state("about", {
                url: "/about",
                templateUrl: "views/about.html",
                controller: "aboutCtrl",
            })

               $stateProvider
            .state("about2", {
                url: "/about2",
                templateUrl: "views/about2.html",
                controller: "aboutCtrl",
            })

              $stateProvider
            .state("health", {
                url: "/health",
                templateUrl: "views/health.html",
                controller: "healthCtrl",
            })
              $stateProvider
            .state("MakeupTips", {
                url: "/MakeupTips",
                templateUrl: "views/MakeupTips.html",
                controller: "makeupTipsCtrl",
            })

    })