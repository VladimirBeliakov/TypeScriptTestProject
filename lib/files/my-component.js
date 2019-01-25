"use strict";
var MyViewModel = /** @class */ (function () {
    function MyViewModel(params) {
        this.usersData = ko.observableArray();
        this.params = params;
        var users = this.params;
        var self = this;
        users.forEach(function (item) {
            self.usersData.push(new User(item.name, item.age));
        });
    }
    ;
    return MyViewModel;
}());
;
var User = /** @class */ (function () {
    function User(name, age) {
        this.point = ko.observable();
        this.name = name;
        this.age = age;
    }
    ;
    return User;
}());
;
define(['knockout'], MyViewModel);
//# sourceMappingURL=my-component.js.map