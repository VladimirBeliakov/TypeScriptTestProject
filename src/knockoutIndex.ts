
interface IMyPo {
    firstName: KnockoutObservable<string>,
    lastName: KnockoutObservable<string>
}

class MyPo implements IMyPo{
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    constructor(firstName: string, lastName: string) {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
    };
    
    greenOrRed = function(this: MyPo) {
        return Number.parseInt(this.lastName().substring(4)) % 2 == 0;
    };
    getLastName = function(this: MyPo, index: number) {
        let number = index;
        return this.lastName() + number;
    };
};
class MyNewBinding {
    label: string = "My label";
    input: KnockoutObservable<string | undefined> = ko.observable();
    output: string | undefined = this.input();
    counter: KnockoutObservable<number> = ko.observable(0);
    array: KnockoutObservableArray<MyPo> = ko.observableArray([]);

    enabled = ko.observable(false);
    add = () => {
        this.counter(this.counter() + 1);
        this.array.push(new MyPo("First", "Last"));
        this.myMarkup("<h3>H3 tag" + this.counter() + "</h3>");
    };
    remove = (item: MyPo) => {
        this.array.remove(item);
        this.counter(this.counter() - 1);
        this.myMarkup("<h3>H3 tag" + this.counter() + "</h3>");
    }
    itemCount: KnockoutComputed<number> = ko.pureComputed(
        () => { return this.array().length }, this);

    myMarkup: KnockoutObservable<string | undefined> = ko.observable();

    isTextBoxDisabled: KnockoutObservable<boolean | undefined> = ko.observable();

    disableEnable = () => {
        this.isTextBoxDisabled() ? this.isTextBoxDisabled(false) : this.isTextBoxDisabled(true);
    };

    visibleIf = () => {
        return this.counter() > 3;
    };

    objectWith: { prop1: string, prop2: string } = { prop1: "Joe", prop2: "Dow" };
    
    categories: KnockoutObservableArray<{name: string, items: string[]}> = ko.observableArray([
            { name: 'Fruit', items: [ 'Apple', 'Orange', 'Banana' ] },
            { name:  'Vegetables', items: [ 'Celery', 'Corn', 'Spinach' ] }
    ]);

    foreachInCom: KnockoutObservableArray<string> = ko.observableArray([
        'Item1', 'Item2', 'Item3'
    ]);

    // myComponent: { name: string, params: { name: string, age: number}[]} = {
    //     name: 'my-first-component',
    //     params: [ 
    //         { name: 'Joe', age: 23 },
    //         { name: 'Elizabeth', age: 12 },
    //         { name: 'Jane', age: 45 }
    //     ]
    // };
}


ko.applyBindings(new MyNewBinding());