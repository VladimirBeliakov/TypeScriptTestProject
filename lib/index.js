"use strict";
// import { style } from 'typestyle';
// /// Some change
// /// new changes
// /// third change
// console.log('Hello world!!!');
// function logName(something: { name: string }) {
//   console.log(something.name);
// }
// var person = { name: 'matt', job: 'being awesome' };
// var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
// var random = { note: `I don't have a name property` };
// logName(person); // okay
// logName(animal);
// //logName(random);
// logName({ name: 'matt' }); // okay
// //logName({ name: 'matt', job: 'being awesome' });
// var x: { foo: number, [x: string]: any };
// x = { foo: 1, ywer: 1 };
// function doSomething(x: number | string) {
//   if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
//       console.log(x.substr(1)); // Error, 'subtr' does not exist on `string`
//       console.log(x.substr(1)); // OK
//   }
//   //x.substr(1); // Error: There is no guarantee that `x` is a `string`
// }
// interface Foo {
//   foo: number;
//   common: string;
// }
// interface Bar {
//   bar: number;
//   common: string;
// }
// function isFoo(arg: any): arg is Foo {
//   return arg.foo !== undefined;
// }
// /**
//  * Sample usage of the User Defined Type Guard
//  */
// function doStuff(arg: Foo | Bar) {
//   if (isFoo(arg)) {
//       console.log(arg.foo); // OK
//       console.log(arg.bar); // Error!
//   }
//   else {
//       console.log(arg.foo); // Error!
//       console.log(arg.bar); // OK
//   }
// }
// doStuff({ foo: 123, common: '123' });
// doStuff({ bar: 123, common: '123' });
// class Myfoo implements Foo {
//   foo: number = 1;
//   common: string = "some string";
// }
// // Example Setup
// function immediate(callback: ()=>void) {
//   callback();
// }
// // Type Guard
// // if (foo.bar) {
// //   console.log(foo.bar.baz); // Okay
// //   const otherBar = foo.bar;
// //   immediate(() => {
// //     console.log(otherBar.baz); // TS error: Object is possibly 'undefined'"
// //   });
// // }
// let newFoo: 'String';
// newFoo = 'String';
// type CardinalDirection =
//     | "North"
//     | "East"
//     | "South"
//     | "West";
// function move(distance: number, direction: CardinalDirection) {
//     // ...
// }
// move(1,"North"); // Okay
// move(1,"Nurth"); // Error!
// interface Todo {
//   id: number;
//   text: string;
//   due: Date;
// }
// function prop<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// const todo = {
//   id: 1,
//   text: "Buy milk",
//   due: new Date(2016, 11, 31)
// };
// const id = prop(todo, "id");     // number
// const text = prop(todo, "text"); // string
// const due = prop(todo, "due");   // Date
/** Utility function to create a K:V from a list of strings */
// function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
//   return o.reduce((res, key) => {
//     res[key] = key;
//     return res;
//   }, Object.create(null));
// }
// /**
//   * Sample create a string enum
//   */
// /** Create a K:V */
// const Direction = strEnum([
//   'North',
//   'South',
//   'East',
//   'West'
// ])
// /** Create a Type */
// type Direction = keyof typeof Direction;
// /** 
//   * Sample using a string enum
//   */
// let sample: Direction;
// sample = Direction.North; // Okay
// sample = 'North'; // Okay
// class Foo {
//   readonly bar = 1; // OK
//   readonly baz: string = "hello";
//   constructor() {
//       this.baz = ""; // OK
//   }
// }
// let myFoo: Foo = new Foo();
// console.log(myFoo);
// type Foo = {
//   bar: number;
//   bas: number;
// }
// type FooReadonly = Readonly<Foo>; 
// let foo:Foo = {bar: 123, bas: 456};
// let fooReadonly:FooReadonly = foo;
// foo.bar = 456; // Okay
// fooReadonly.bar = 456; // ERROR: bar is readonly
// class Person {
//   firstName: string = "John";
//   lastName: string = "Doe";
//   get fullName() {
//       return this.firstName + this.lastName;
//   }
// }
// let myPerson: Person = new Person();
// console.log(myPerson.firstName);
// myPerson.lastName = "Smith";
// myPerson.fullName = "Mike Smith";
// let foo: {
//   readonly bar: number;
// } = {
//       bar: 123
//   };
// function iMutateFoo(foo: { bar: number }) {
//   foo.bar = 456;
// }
// iMutateFoo(foo); // The foo argument is aliased by the foo parameter
// console.log(foo.bar); // 456!
// interface Foo {
//   readonly bar: number;
// }
// let foo: Foo = {
//   bar: 123
// };
// function iTakeFoo(foo: Foo) {
//   foo.bar = 456; // Error! bar is readonly
// }
// iTakeFoo(foo); // The foo argument is aliased by the foo parameter
// const getJSON = <T>(config: {
//   url: string,
//   headers?: { [key: string]: string },
// }): Promise<T> => {
//   const fetchConfig = ({
//     method: 'GET',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     ...(config.headers || {})
//   });
//   return fetch(config.url, fetchConfig)
//     .then<T>(response => response.json());
// }
// type LoadUsersResponse = {
//   users: {
//     name: string;
//     email: string;
//   }[];  // array of user objects
// }
// function loadUsers() {
//   return getJSON<LoadUsersResponse>({ url: 'https://example.com/users' });
// }
// let resp = loadUsers();
// const foo = (a: number, b: number) => { return [a, b];/* do something */ };
// type FieldState = {
//   value: string
// }
// type FormState =
//   { isValid: boolean }
//   & { [fieldName: string]: FieldState }
// // Use it for some JavaScript object you are gettting from somewhere 
// // declare const foo:FormState; 
// // const isValidBool = foo.isValid;
// // const somethingFieldState = foo['something'];
// let otherFieldState: FieldState = { value: "some str" };
// // Using it to create a TypeScript object will not work
// namespace importing {
//   export class Foo { }
// }
// let importingFoo: importing.Foo;
// import Bar = importing.Foo;
// var bar: Bar; // Okay
// class Foo {
//   foo: number; // some member whose type we want to capture
// }
// // Purely to capture type
// declare let _foo: Foo;
// // Same as before
// let bar: typeof _foo.foo;
// // Capture both the *type* and *value* of magic string:
// const foo = "Hello World";
// // Use the captured type:
// let bar: typeof foo;
// // bar can only ever be assigned to `Hello World`
// bar = "Hello World"; // Okay!
// bar = "anything else "; // Error!
//console.log.apply(console, new Array(1000000000));
// type Constructor<T = {}> = new (...args: any[]) => T;
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// function Tagged<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     tag: string | null = '';
//   };
// }
// const taggedUser = Tagged(User);
// let myUser = new taggedUser("Vlad");
// console.log(myUser.name, myUser.tag);
// console.log(myUser.name, myUser.tag);
// interface Entity {
//   name?: string;
//   notInit: number;
// };
// class NotInitProp {
//   nonInit!: number;
//   newProp: string = "";
// }
// function processEntity(e?: Entity) {
//   let a = e!.name;  // TS ERROR: e may be null.
//   let b = e!.name;  // OKAY. We are asserting that e is non-null.
// }
// some comment
// type SomethingComplex = {
//   name: string;
//   age: number;
// }
// function getAge() {
//   return 12;
// }
// function takeSomethingComplex(arg: SomethingComplex) {
// }
// const sc = {
//   name: "vlad",
//   age: getAge
// }
//takeSomethingComplex(sc);
// var touch = require("touch");
// var file = touch("c:\\uploads\\textFile.txt");
// var diff = require("arr-diff");
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4];
// console.log(diff(arr1, arr2));
// try {
// } catch (error) {
//   if (error instanceof Error) {
//   }
// }
//# sourceMappingURL=index.js.map