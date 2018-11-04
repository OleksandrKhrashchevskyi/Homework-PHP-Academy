
// Method of the Array object which calls the transferred callback function once for each element in the array, until it returns true.

var arr = [1,2,3,4,5,6,7,8,9];

arr.find(function (item) {

    return item>5;


});