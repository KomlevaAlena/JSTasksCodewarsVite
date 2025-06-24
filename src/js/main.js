import '../scss/style.scss';
import {calculateTip} from './tasks/tips';
import {squareSum} from './tasks/Square(n)Sum';
import {mergeArrays} from './tasks/mergeTwoArrays';
import {evenOrOdd} from './tasks/evenodd';
import {sortByValueAndIndex} from './tasks/arrsortvalueindex';
import {warnTheSheep} from './tasks/wolfsheep';
import {createArray} from './standart-action/arrays';

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    createArray();
    // //mobileMenu.init();
    // sliderHero.init();
    // sliderTours.init();
    // sliderTraining.init();
    // sliderReviews.init();
    // sliderAdvantages();
  });
});




console.log(calculateTip(300, 'Good'));
console.log(squareSum([1, 2, 3]));
console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c']));
console.log(evenOrOdd(5));
console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
