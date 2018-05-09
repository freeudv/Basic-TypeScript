"use strict";
// Утверждение типа - мы сами подсказываем, какой тип вернется
{
    var value_1 = 42;
    var valueAsString = value_1.toFixed(2);
    //или так
    var valueAsString2 = value_1.toFixed(2);
    //при этом value остается типом any
}
//Еще пример
var button = document.getElementById('button');
button.onclick = function (event) {
    // мы подскаываем компилятору
    var target = event.target;
};
//или так
button.onclick = function (event) {
    // мы подскаываем компилятору
    var target = event.target;
};
