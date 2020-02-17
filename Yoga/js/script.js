// Событие загрузки страницы, загрузка DOM
window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');

	// Скрываем табы
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	// Показать таб номер b
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	// Клик по табу
	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//Timer
	let deadLine = '2020-12-25';
	
	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000)) % 60,
			minutes = Math.floor((t/(1000*60)) % 60),
			hours = Math.floor((t/(1000*60*60)));
			// days = Math.floor(t/(1000*60*60*24))

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endTime){
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				timeInterval = setInterval(updateClock, 1000);
		
		function updateClock() {
			let t = getTimeRemaining(endTime);
			
			function addZero(num){
				if (num < 10) {
					return `0${num}`;
				} else return num;
			};

			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total < 0){
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}

	setClock('timer', deadLine);

	// Modal

	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			moreTab = document.querySelectorAll('.description-btn');

	// Modal Tab
	moreTab.forEach(function(item) {
		item.addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	});

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	//Form
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        formBotton = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('giv');
        statusMessage.classList.add('status');
    
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    
                    request.onreadystatechange = function() {
                        if(request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200){
                            resolve()
                        } else {
                            reject()
                        }
                    };

                    request.send(data);
                });
            } //end postData

        function clearInput() {
            for (let i = 0; i , input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput)
        });
    } // end sendForm
	
    sendForm(form);
	//sendForm(formBotton);
	
	//Slider

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));
		slides[slideIndex-1].style.display = 'block';
		dots[slideIndex-1].classList.add('dot-active');
	}
	
	function plusSlide(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlide(-1);
	});

	next.addEventListener('click', function() {
		plusSlide(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	// Calc

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		plase = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('change', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;

			if(restDays.value == '' || this.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000;


			if(this.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		plase.addEventListener('change', function() {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		})

});