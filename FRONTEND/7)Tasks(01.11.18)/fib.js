// Запросить у пользователя количество чисел(до 40)
// Вывести числа Фибоначчи

'use strict';

var count = prompt('Enter your value from 1 to 40');


function fib(count) {


    if (count >= 40) {
        alert('You need write your count from 1 to 40. Please try again')
    }

    if (count < 0) {
        alert('Your value always will be 0')
    }
    if (count === 1) {
        alert('Your value always will be 1')
    }

    var a = 1,
        b = 1;

    for (var i = 3; i <= count; i++) {

        var c = a + b;
        a = b;
        b = c;

    }

    return b;
}


alert(fib(count));