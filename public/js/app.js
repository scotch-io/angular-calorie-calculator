angular.module('calcApp', ['ui.bootstrap'])

// main controller -------------------------------------------------------------
.controller('mainController', function($scope) {

	$scope.weightModifier = '';
	$scope.heightModifier = '';
	$scope.activityType   = '';

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