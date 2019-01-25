class MyViewModel {
    params: { name: string, age: number }[];
    usersData: KnockoutObservableArray<User | undefined> = ko.observableArray();
    constructor(params: { name: string, age: number }[]) {
        this.params = params;
        let users: User[] = this.params as User[];
        let self = this;
        users.forEach((item: User) => {
            self.usersData.push(new User(item.name, item.age));
        });
    };
};
class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    point: KnockoutObservable<number | undefined> = ko.observable();
};
define(['knockout'], MyViewModel);