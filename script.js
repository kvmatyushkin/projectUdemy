'use strict';

let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.scrollHeight;

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
})