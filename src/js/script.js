'use strict';

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');

});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');

});

const scrollMenu = function () {
    let element = document.querySelector(".sidepanel__text");
    let scrollTop = window.scrollY;
  
    if (scrollTop > 200) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
};
  
document.addEventListener("scroll", scrollMenu);


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');


counters.forEach ((item, i) => {
	lines[i].style.width = item.innerHTML;
});
