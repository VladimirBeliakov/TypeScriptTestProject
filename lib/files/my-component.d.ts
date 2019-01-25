/// <reference types="knockout" />
declare class MyViewModel {
    params: {
        name: string;
        age: number;
    }[];
    usersData: KnockoutObservableArray<User | undefined>;
    constructor(params: {
        name: string;
        age: number;
    }[]);
}
declare class User {
    name: string;
    age: number;
    constructor(name: string, age: number);
    point: KnockoutObservable<number | undefined>;
}
