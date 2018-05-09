// Утверждение типа - мы сами подсказываем, какой тип вернется
{
    let value:any = 42;
    let valueAsString:string = (value as number).toFixed(2);
    //или так
    let valueAsString2:string = (<number>value).toFixed(2);
    //при этом value остается типом any
}

//Еще пример
let button = document.getElementById('button');

button.onclick = function (event) {
    // мы подскаываем компилятору
    let target = <HTMLButtonElement>event.target;
}
//или так
button.onclick = function (event) {
    // мы подскаываем компилятору
    let target = event.target as HTMLButtonElement;
}