/**
 * Controller class for homepage.
 */


function PageController() {
	this.init();
};

PageController.prototype.init = function() {
	this.randomPredicateDisplay();

	this.addProjects();
};

PageController.prototype.addProjects = function() {
	this.setupProjectTemplate();
};

PageController.prototype.setupProjectTemplate = function() {
	var template = '<% _.each(project, function(project) { %><a class=\"project\" href=\"<%= project.href %>\">' +
		'<div class=\"project-image\" style=\"background-image: url(<%= project.image %>);\"></div>' +
		'<div class=\"project-description\">' +
		'<h4><%= project.name %></h4>' +
		'<div><%= project.description %></div></div></a> <% }); %>';
	var data = _.template(template, {
		project : [
			{name: 'hello', description: 'world', href: '//www.google.com/edu', image: 'img/edu.png'},
			{name: 'hi', description: 'universe'}]
	});

	console.log(data);
};

PageController.prototype.randomPredicateDisplay = function() {

	var pause = 1000; // define the pause for each tip (in milliseconds)
	var temp = -1;

	var getRan = function(){
		// get the predicate at random
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
