"use strict";
function buildEmail(username, domain) {
    return username + "@" + domain;
}
// в TypeScript все объявленные параметры функции являются обязательными.
var email1 = buildEmail('bill'); // ошибка, мало параметров
var email2 = buildEmail('bill', 'microsoft', 'com'); // ошибка, лишний параметр
var email3 = buildEmail('bill', 'microsoft.com');
// Можно указать параметр как не обязательный
function buildEmail_1(username, domain) {
    return username + "@" + domain;
}
var email4 = buildEmail_1('bill');
// Но лучше указывать параметр по умолчанию
function buildEmail_2(username, domain) {
    if (domain === void 0) { domain = 'microsoft.com'; }
    return username + "@" + domain;
}
var email5 = buildEmail_2('bill');
