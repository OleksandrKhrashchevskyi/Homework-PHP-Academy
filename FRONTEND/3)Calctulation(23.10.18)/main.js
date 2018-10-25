"use strict"; // Видає помилки, вимкнути не можливо!!!



// Calculation with using if/else.

    var calculation = prompt('Enter type of operation + or - or * or /');
    var count1 = prompt('Please write you first number');
    var count2 = prompt('Please write you second number');
    var result;
    var result2;


    if (calculation === '+') {

        result = parseInt(count1) + parseInt(count2);
    }

    if (calculation === '-') {

        result = parseInt(count1) - parseInt(count2);
    }

    if (calculation === '*') {

        result = parseInt(count1) * parseInt(count2);
    }

    if (calculation === '/') {

        result = parseInt(count1) / parseInt(count2);


    }




result2 = confirm('Do you want to take the SQR = ' + ' ' + result);

        if (result2) {
            alert(Math.sqrt(result));
        }else{

        alert(result);

            }





