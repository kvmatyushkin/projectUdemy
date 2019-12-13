'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItems = document.getElementsByClassName('menu-item'),
    newLi = document.createElement('li'),
    adv = document.querySelector('.adv'),
    title = document.getElementById('title'),
    promptUser = document.getElementById('prompt');

menu.insertBefore(menuItems[2], menuItems[1]); //меняем местами 2 и 3

newLi.classList.add('menu-item');       //добовляем пятый пункт
newLi.textContent = 'Пятый пункт';
menu.appendChild(newLi);

title.textContent = 'Мы продаем только подлинную технику Apple';  //Меняем заголовок

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';  //меняем картинку заднего фона

adv.remove(); //удаляем рекламу

promptUser.textContent = prompt('Ваше отношение к технике Apple?', '');

console.log(adv);