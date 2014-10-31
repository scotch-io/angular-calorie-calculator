angular.module('calcApp', ['ui.bootstrap'])

// main controller -------------------------------------------------------------
.controller('mainController', function($scope) {

	$scope.heightModifier = '';
	$scope.weightModifier = '';
	$scope.activityType   = '';

	$scope.info = {};
	$scope.info.gender = 'male';

	$scope.doTheThing = function(age) {

		$scope.shitty = age.split(' ');

		console.log($scope.shitty);

	};

})

// our custom filter for calculating with modifiers ----------------------------
.filter('weightCalc', function() {

	return function(input, weightModifier) {

		return 'what';
	}

})

.filter('heightCalc', function() {

	return function(input, weightModifier) {

		return 'what';
	}

})

.filter('activityCalc', function() {

	return function(input, weightModifier) {

		return 'what';
	}

});