// Запросить у пользователя число, вывесты сумму всех чисел до заданого,
// начиная с реализовать через рекурсию


function sumRequr(n) {


    if (n <0 ){

        alert('Error');

    }
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }


    return sum;
}

alert(sumRequr(10));


