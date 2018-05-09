// Во избежание опечаток и создания других подобных ошибок создается тип enum

enum Day {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun
};

let day:Day = Day.Mon;

function getDayName(day:Day):string {
    switch (day) {
        case Day.Mon: return 'Понедельник'
        case Day.Tue: return 'Вторник'
        case Day.Wed: return 'Среда'
        case Day.Thu: return 'Четверг'
        case Day.Fri: return 'Пятница'
        case Day.Sat: return 'Суббота'
        case Day.Sun: return 'Воскресенье'
        default: return '';
    }
}
console.log(Day);
console.log(day);
console.log(getDayName(Day.Sun));