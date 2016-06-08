(function(){
    "use strict";
    
    angular.module("AdministradordeTareas")
    .controller("MainCtrl", [MainCtrl]);
    
    function MainCtrl() {
        var vm = this;   
        vm.saludo = "@amartinez";
        vm.despedida = "Creando Soluciones";
    }
    
    
})();