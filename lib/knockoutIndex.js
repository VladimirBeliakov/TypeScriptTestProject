"use strict";
var MyPo = /** @class */ (function () {
    function MyPo(firstName, lastName) {
        this.greenOrRed = function () {
            return Number.parseInt(this.lastName().substring(4)) % 2 == 0;
        };
        this.getLastName = function (index) {
            var number = index;
            return this.lastName() + number;
        };
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
    }
    ;
    return MyPo;
}());
;
var MyNewBinding = /** @class */ (function () {
    function MyNewBinding() {
        var _this = this;
        this.label = "My label";
        this.input = ko.observable();
        this.output = this.input();
        this.counter = ko.observable(0);
        this.array = ko.observableArray([]);
        this.enabled = ko.observable(false);
        this.add = function () {
            _this.counter(_this.counter() + 1);
            _this.array.push(new MyPo("First", "Last"));
            _this.myMarkup("<h3>H3 tag" + _this.counter() + "</h3>");
        };
        this.remove = function (item) {
            _this.array.remove(item);
            _this.counter(_this.counter() - 1);
            _this.myMarkup("<h3>H3 tag" + _this.counter() + "</h3>");
        };
        this.itemCount = ko.pureComputed(function () { return _this.array().length; }, this);
        this.myMarkup = ko.observable();
        this.isTextBoxDisabled = ko.observable();
        this.disableEnable = function () {
            _this.isTextBoxDisabled() ? _this.isTextBoxDisabled(false) : _this.isTextBoxDisabled(true);
        };
        this.visibleIf = function () {
            return _this.counter() > 3;
        };
        this.objectWith = { prop1: "Joe", prop2: "Dow" };
        this.categories = ko.observableArray([
            { name: 'Fruit', items: ['Apple', 'Orange', 'Banana'] },
            { name: 'Vegetables', items: ['Celery', 'Corn', 'Spinach'] }
        ]);
        this.foreachInCom = ko.observableArray([
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
    return MyNewBinding;
}());
ko.applyBindings(new MyNewBinding());
//# sourceMappingURL=knockoutIndex.js.map