angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaNativeAudio, $timeout, $cordovaVibration, $ionicPlatform) {
  $scope.Saludar = function(){
    alert("HOLA!");
    console.log("PROBANDO");
  }

  $scope.Vibrar = function(){
    $cordovaVibration.vibrate(1000);
  };

/*var audio = new Audio('audio/1.mp3');
 $scope.Sonido = function(){
audio.play();
}*/
  $ionicPlatform.ready(function() {
    if( window.plugins && window.plugins.NativeAudio ) {
      window.plugins.NativeAudio.preloadSimple( 'click', 'audio/click.mp3', function(msg){
      }, function(msg){
          console.log( 'error: ' + msg );
      });
    }
  });

  $scope.Sonido = function(){
    window.plugins.NativeAudio.play( 'click' );
  }

})

.controller('ChatsCtrl', function($scope, $cordovaNativeAudio, $timeout, $cordovaVibration) {

  $scope.Vibrar = function(){
    $cordovaVibration.vibrate(1000);
  };

/*var audio = new Audio('audio/1.mp3');
 $scope.Sonido = function(){
audio.play();
}*/

if( window.plugins && $cordovaNativeAudio){
  //Funciones del plugin Sonidos
  $cordovaNativeAudio.preloadSimple('click', 'audio/1.mp3');

  $scope.Sonido = function(){
    console.log("PROBANDO");
    $cordovaNativeAudio.play('click');
    console.log("PROBANDO");
    //$cordovaNativeAudio.loop('music');
  }
}
else{
  alert("ERROR");
}


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
