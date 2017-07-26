angular.module("makeUp", [ "makeUp.controllers", "ui.router","angularSpinners",'ui.bootstrap'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider

            .when("", "/entry");

        $stateProvider
            .state("entry", {
                url: "/entry",
                templateUrl: "/templates/entry.html",
                controller: "entryCtrl",
            })

              $stateProvider
            .state("Cosmetic", {
                url: "/Cosmetic",
                templateUrl: "/templates/Cosmetic.html",
                controller: "cosmeticCtrl",
            })

              $stateProvider
            .state("about", {
                url: "/about",
                templateUrl: "/templates/about.html",
                controller: "aboutCtrl",
            })

               $stateProvider
            .state("about2", {
                url: "/about2",
                templateUrl: "/templates/about2.html",
                controller: "aboutCtrl",
            })

              $stateProvider
            .state("health", {
                url: "/health",
                templateUrl: "/templates/health.html",
                controller: "healthCtrl",
            })
              $stateProvider
            .state("MakeupTips", {
                url: "/MakeupTips",
                templateUrl: "/templates/MakeupTips.html",
                controller: "makeupTipsCtrl",
            })

    })