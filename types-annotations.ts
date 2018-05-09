// Аннотации функций

function add(x: number, y:number):number {
    return x + y;
}

// Так выглядит полное описание стрелочной функции
const arrowAdd: (x:number, y:number) => number = (x:number, y:number):number => x+y;

// Так как параметы повторяются, можно указывать только водном месте.
const arrowAdd1 = (x:number, y:number):number => x+y;
//Или
const arrowAdd2:(x:number, y:number) => number = (x, y) => x+y;

// Или даже описать через type
type AddFn = (x:number, y:number) => number;
const arrowAdd3:AddFn = (x, y) => x+y;

//Еще пример

type RequestHandler = (req: Request, res: Response, next: Function) => void;

const handler: RequestHandler = (req, res, next) => {};