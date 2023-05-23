"use strict";

const array = [1, 2, 3, 4];
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
const collection = document.getElementsByClassName("rec");

let i = 0;

for (const element of collection) {
    element.style.order = shuffledArray[i];
    i++;
}