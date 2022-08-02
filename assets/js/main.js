/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
let slider = document.querySelector('.slider');
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
const menuLink = document.getElementsByClassName('menu-link');
const cars = document.querySelector('.car-section');
let showBtn = document.getElementsByClassName("show-btn");
let readBtn = document.querySelector('.read-more-btn');
const arrow = document.querySelector('.arrow');
const categoryItems = document.getElementsByClassName('category-item')

	menuIcon.addEventListener('click', () => {
		menu.classList.toggle("active-menu")
		console.log('Hello world');
	});

	document.addEventListener('scroll', () => {
		if(document.documentElement.scrollTop > 0){
			slider.classList.add('menu-onscroll');
			document.querySelector('.logo-name').classList.add('color-black');
			menuIcon.classList.add('color-black');
			for (let i = 0; i < menuLink.length; i++) {
				menuLink[i].classList.add('color-black');
			  }
		}
		else{
			slider.classList.remove('menu-onscroll');
			document.querySelector('.logo-name').classList.remove('color-black');
			menuIcon.classList.remove('color-black');
			for (let i = 0; i < menuLink.length; i++) {
				menuLink[i].classList.remove('color-black');
			}		
		}
	})

	for (let i = 0; i < showBtn.length; i++) {
		showBtn[i].addEventListener("click", () => {
			cars.classList.remove('h-0');
		})
	}	
	readBtn.addEventListener('click', () => {
		document.querySelector('.read-more').classList.remove('h-0');
		readBtn.classList.add('h-0')
	})



	document.addEventListener('scroll', () => {
		if((document.documentElement.scrollTop < 50)){
			arrow.classList.add('h-0')
		}
		else if(document.documentElement.scrollTop > 50){
			arrow.classList.remove('h-0')
		}
	})

	categoryItems.addEventListener("scroll", (event) => {
console.log(scroller.scrollTop);	  });
