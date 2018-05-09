{
    let value:string|null|undefined;
    value = null;
    value = undefined;

    console.log(value);
}

// Еще пример
let element:HTMLElement|null = document.getElementById('message');

element.innerText = 'Welcome'; //ошибка, т.к. может быть null вместо обьекта.
// можно сделать так, если мы знаем, что элемент точно есть
element!.innerText = 'Welcome';

// Еще пример
function getElement(selector:string):HTMLElement|null {
    const element:HTMLElement|null = document.getElementById(selector);

    if (element === null) {
        //Здесь тип element равен null
        element
    } else {
        //А здесь HTMLElement
        element
    }

    return element;
}