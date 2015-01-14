  angular.module("myapp", ['ChatController', 'ListController', 'factories']);

//PULLED ALL FUNCTIONALITY OUT INTO SEPERATE MODULES, I.E.
//FACTORIES, CONTROLLERS AND ADDED THEM AS DEPENDANCIES TO 
//THE MAIN "MYAPP" MODULES

  /*.factory("ChatService", function() {
  var ref = new Firebase("https://grDemo.firebaseio.com");
  return {
    //Get Message
    getMessages: function() {
    var messages = [];
    ref.on("child_added", function(snapshot) {
      messages.push(snapshot.val());
        //for testing
    console.log(messages[1]);
      });
    return messages;

  },
      //Add message
      addMessage: function(message) {
      ref.push(message);
      }
    }
  })

  .controller("ChatController", ["$scope", "ChatService",
    function($scope, service) {
   
      $scope.messages = service.getMessages();
       $scope.addMessage = function() {
        //convert lat text to float number with parseFloat.
        service.addMessage({lat:parseFloat($scope.Lat), lng:parseFloat($scope.Lng) });
        $scope.message = "";
//      //for testing
        console.log($scope.Lat);

    };
  }
  ]);*/

  angular.module('factories', []).factory("ChatService", function() {
  
  var refData = new Firebase("https//grDemo.firebaseio.com/users/data");

  return {
    //Get Message
    getMessages: function() {
     
     var messages = [];
    refData.on("child_added", function(snapshot) {
      messages.push(snapshot.val());
     });

    return messages;

  },
      //Add message
      addMessage: function(message) {
      refData.push(message);
      }

      
    }
  });


  angular.module('ChatController', []).controller("ChatController", ["$scope", "ChatService",
    function($scope, service) {
           
      $scope.messages = service.getMessages();
       $scope.addMessage = function() {
        //convert lat text to float number with parseFloat.
        service.addMessage({name:($scope.uName), lat:parseFloat($scope.Lat), lng:parseFloat($scope.Lng)});
        $scope.message = "";
      };
    }
  ]);
  
   angular.module('ListController', []).controller("ListController", ["$scope",
    function($scope) {
     
           
     
    }
  ]);