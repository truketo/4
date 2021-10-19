document.addEventListener('DOMContentLoaded', () => {

	var people_names = [
		'Mary from NewYork, US ordered:',
		'Sussan from Chicago, US ordered:',
		'Anna from NewYork, US ordered:',
		'Mariane from Chicago, US ordered:',
		'Jimmy from Dallas, US ordered:',
		'Alexa from Detroit, US ordered:',
		'Sally from Los Angeles, US ordered:',
		'Evelyn from Miami, US ordered:',
		'Mark from Kansas, US ordered:',
	];

	$(document).ready(function () {

		var hover = false;
		var flag = true;
		var min = 7;
		var max = 25;
		var iterator = 0;

		$('#someone-purchased p span').text(people_names[iterator]);

		function changeClass() {
			var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			$('#someone-purchased').css('display', 'block');
			if (!hover) {
				$('#someone-purchased').toggleClass('fade-in fade-out');
				if ($('.fade-in').length == 0) {
					flag = true;
				} else {
					flag = false;
				}
				if (flag) {
					setTimeout(function myFunction() {
						$('#someone-purchased a img').attr('src', 'img/product.png');
						$('#someone-purchased p a').text("TruKeto Bottle - " + randomNumber + " seconds ago");
						$('#someone-purchased p span').text(people_names[iterator]);
					}, 5000);
					if (iterator >= people_names.length - 1) {
						iterator = 0;
					} else {
						iterator++;
					}
				}
			}
		}

		$('#someone-purchased').mouseover(function () {
			hover = true;
		});
		$('#someone-purchased').mouseout(function () {
			hover = false;
		});
		setInterval(changeClass, Math.floor((Math.random() * 8000) + 6000));
	});

	//

	var my = document.getElementById('popMeUPGC');

	function close_x() {
		my.style.display = 'none';
	}

	my.addEventListener('click', () => {
		close_x();
	});

	//

	function getRandomInt(min, max) {
		var eenum = Math.floor(Math.random() * (max - min + 1) + min);
		return eenum;
	}

	var randd = getRandomInt(204, 247);
	var mytimer = document.getElementById('mytimer1');
	mytimer.innerHTML = randd;

	function timer_up() {
		var mytimer = document.getElementById('mytimer1');
		var r = getRandomInt(1, 6);

		var newval = mytimer.innerHTML;
		newval = parseInt(newval) + r;

		mytimer.innerHTML = '';
		mytimer.innerHTML = newval;

	}
	setInterval(timer_up, 6000);

});
