angular.module('your_app_name.auth.controllers', [])

.controller('AuthCtrl', function($scope){

})

.controller('WelcomeCtrl', function($scope, $ionicModal, show_hidden_actions, $state){

	$scope.show_hidden_actions = show_hidden_actions;

	$scope.toggleHiddenActions = function(){
		$scope.show_hidden_actions = !$scope.show_hidden_actions;
	};

	$scope.facebookSignIn = function(){
		console.log("doing facebbok sign in");
		$state.go('app.feed');
	};

	$scope.googleSignIn = function(){
		console.log("doing google sign in");
		$state.go('app.feed');
	};

	$scope.twitterSignIn = function(){
		console.log("doing twitter sign in");
		$state.go('app.feed');
	};

	$ionicModal.fromTemplateUrl('views/app/legal/privacy-policy.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.privacy_policy_modal = modal;
  });

	$ionicModal.fromTemplateUrl('views/app/legal/terms-of-service.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.terms_of_service_modal = modal;
  });

  $scope.showPrivacyPolicy = function() {
    $scope.privacy_policy_modal.show();
  };

	$scope.showTerms = function() {
    $scope.terms_of_service_modal.show();
  };
})

.controller('LogInCtrl', function($scope, $state){
	$scope.doLogIn = function(){
		console.log("doing log in");
		$state.go('app.feed');
	};
})

.controller('SignUpCtrl', function($scope, $state){
	$scope.doSignUp = function(){
		console.log("doing sign up");
		$state.go('app.feed');
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state){
	$scope.requestNewPassword = function() {
    console.log("requesting new password");
		$state.go('app.feed');
  };
})

;
