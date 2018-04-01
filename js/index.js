var user1 = document.getElementById('user1');
var user2 = document.getElementById('user2');
var user3 = document.getElementById('user3');
var quoteBox = document.getElementById('quoteBox');
var userName = document.getElementById('userName');
var userCity = document.getElementById('userCity');

user1.addEventListener('click', function(){
	
	user1.classList.remove('feedback--images__image__unselected');	
	user2.classList.add('feedback--images__image__unselected');
	user3.classList.add('feedback--images__image__unselected');

	quoteBox.innerHTML = "I laugh at all my friends who live in other neighborhoods. They should use Gentrifi!";
	username.innerHTML = "Emily Ackerman";
	userCity.innerHTML = "Mt. Airy"

});

user2.addEventListener('click', function(){
	user1.classList.add('feedback--images__image__unselected');	
	user2.classList.remove('feedback--images__image__unselected');
	user3.classList.add('feedback--images__image__unselected');
	
	quoteBox.innerHTML = "I couldn't believe how easy it was to find a siiick apartment in a hip neighborhood like Fishtown.";

	username.innerHTML = "Ethan Sherman";
	userCity.innerHTML = "Fishtown";


});

user3.addEventListener('click', function(){
	user1.classList.add('feedback--images__image__unselected');	
	user2.classList.add('feedback--images__image__unselected');
	user3.classList.remove('feedback--images__image__unselected');
	
	quoteBox.innerHTML = "lol what am I doing, I can't afford these places";

	username.innerHTML = "Pavlov Lawrence";
	userCity.innerHTML = "Collingswood";
});



