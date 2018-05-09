

function buildEmail(username:string, domain:string):string {
    return `${username}@${domain}`
}

// в TypeScript все объявленные параметры функции являются обязательными.
let email1 = buildEmail('bill'); // ошибка, мало параметров
let email2 = buildEmail('bill', 'microsoft', 'com'); // ошибка, лишний параметр

let email3 = buildEmail('bill', 'microsoft.com');

// Можно указать параметр как не обязательный
function buildEmail_1(username:string, domain?:string):string {
    return `${username}@${domain}`
}
let email4 = buildEmail_1('bill');

// Но лучше указывать параметр по умолчанию
function buildEmail_2(username:string, domain:string = 'microsoft.com'):string {
    return `${username}@${domain}`
}
let email5 = buildEmail_2('bill');