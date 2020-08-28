(
          function () {
              angular.module('firstApp',[])
              .controller('myController', ctrl );
              ctrl.$inject = ['$scope'];
              function ctrl($scope) {
                  $scope.items = '';
                  $scope.message = '';
      
                  $scope.check = function (){
                      let arrayOfItems = $scope.items.split(',');
                      let counter = 0;
      
                      arrayOfItems.forEach((item) => {
                          if (item != false) {
                              counter++;
                          }
                      });
      
                      if (counter > 0 && counter < 4){
                          $scope.message = 'Enjoy!';
                      }else if(counter >= 4){
                          $scope.message = 'Too much!';
                          
                      }else{
                          $scope.message = 'Please enter data first';
                         
                      }
                  }
              }
              
          }
      )()