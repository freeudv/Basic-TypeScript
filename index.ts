interface Duck {
    walk: () => void;
    swim: () => void;
    quack?: () => void; // необязательный параметр.
}

const bird: Duck = {
    walk() {},
    swim() {},
    quack() {}
};