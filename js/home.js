/**
 * Controller class for homepage.
 */


function PageController() {
	this.init();
};

PageController.prototype.init = function() {
	this.randomPredicateDisplay();

};

PageController.prototype.randomPredicateDisplay = function() {

	var pause = 1000; // define the pause for each tip (in milliseconds)
	var temp = -1;

	var getRan = function(){
		// get the random number
	   	var predicates = ["tautological","unbound","metacircular","echo","vague","istigkeit","now","here","reification","abstraction","spooky","curator","dreamer","hacker","dilettante","finite","phantasmagoria"];
		var randomPredicate = predicates[Math.floor(Math.random() * predicates.length)];
		return randomPredicate;
	};

	var show = function(){
		var ran = getRan();
		// to avoid repeating
		while (ran == temp){
			ran = getRan();
		};
		temp = ran;
		document.getElementById('randompredicate').innerHTML = ran;
	};

	show(); setInterval(show,pause);

};

$(document).ready(function(){
	new PageController();
});
