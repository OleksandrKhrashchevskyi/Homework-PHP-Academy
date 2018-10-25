// Array filtering, if your count less than 100, it will not be displayed.

var arr = [1,2,3,4,5,6,7,8,9,10,55,51,31,21,19,12,11, 122, 41, 121,41,411,412,231,200,194,231,144,155,154,167];

arr.filter(function (item) {

    if (item > 100) {
        return true;
    }

    return false
});