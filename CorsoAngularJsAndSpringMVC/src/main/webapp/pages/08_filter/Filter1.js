
angular.module('corsoBaseAngular.controllers')

.controller('Filter1Ctrl',['$scope', function($scope){
    $scope.title = 'Info Personale';
    $scope.varOrdine = 'name';
    $scope.varStringaRicerca = '';
    $scope.varRuolo = '';
   
    $scope.users = [
                  {'name': 'Fabio', 'city': 'Gorizia','age': 45, role: 'admin', salary: 5200},
                  {'name': 'Marco', 'city': 'Trieste', 'age': 25, role: 'admin', salary: 3000},
                  {'name': 'Alex', 'city': 'Venezia', 'age': 72, role: 'guest', salary: 1500},
                  {'name': 'Luca', 'city': 'Gorizia', 'age': 33, role: 'admin', salary: 2200},
                  {'name': 'Paolo', 'city': 'Gorizia', 'age': 54, role: 'guest', salary: 1200},
                  {'name': 'Vanessa', 'city': 'Venezia', 'age': 23, role: 'developer', salary: 1200},
                  {'name': 'Fabrizio', 'city': 'Verona', 'age': 18, role: 'developer', salary: 1100.50},
                ];
    $scope.ruoli = [ '', 'admin', 'guest','developer', 'passacarte'];
}])
  

	
;