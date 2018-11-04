// Запросить у пользователя число, вывесты сумму всех чисел
// до заданого, начиная с 0




var x=prompt("Write your start value");
var y=prompt("Write your last value");
var result=0;

while(x<y){

    x++;
    result+=y;
}

alert(result);