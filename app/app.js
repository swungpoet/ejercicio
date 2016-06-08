(function() {
    
    "use strict";
    var app = angular.module("AdministradordeTareas",
                            ["ui.router"]);
    
    app.config(["$stateProvider", "$urlRouterProvider",
               function($stateProvider, $urlRouterProvider){
                   
        $urlRouterProvider.otherwise("/");
                   
                   $stateProvider
                   .state("inicio", {
                       url: "/",
                       templateUrl: "paginas/bienvenidos.html"
                   })
                   
                   .state("acercade", {
                       url: "/acercade",
                       templateUrl: "paginas/acercade.html"
//                       controller: "TareasCtrl as vm"
                   })
        }]);
})();