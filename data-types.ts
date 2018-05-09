let done:boolean = false;

let height:number = 180;
let weight:number = 75.7;
let hex:number = 0xf00d;
let binary:number = 0b1010;
let octl:number = 0o744;

let name:string = 'Andres';
let language:string = 'TypeScript';
let sentence:string = `Hi, my name is ${name}. I am creator of ${language}`;

// Объявление массива строк;
let companies: string[] = ['Microsoft', 'Google', 'Apple'];
companies.push('Facebook');

// Объявление массива строк другим способом - обобщением;
let frameworks: Array<string> = [];

//Дополнительные типы данных в TypeScript
//any
let whatever:any = 42;
let list:any[] = [true, 1, 'string'];

//void - ничего не возвращает.
function showAlert(message:string):void {
    alert(message);
}

//undefined
let u:undefined = undefined;
//null
let n:null = null;

//never - функция никогда не доходит до возврата.
function error(message:string):never {
    throw new Error(message);
}

function infLoop():never {
    while (true) {

    }
}
