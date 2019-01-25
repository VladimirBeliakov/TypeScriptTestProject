/// <reference types="knockout" />
interface IMyPo {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
}
declare class MyPo implements IMyPo {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    constructor(firstName: string, lastName: string);
    greenOrRed: (this: MyPo) => boolean;
    getLastName: (this: MyPo, index: number) => string;
}
declare class MyNewBinding {
    label: string;
    input: KnockoutObservable<string | undefined>;
    output: string | undefined;
    counter: KnockoutObservable<number>;
    array: KnockoutObservableArray<MyPo>;
    enabled: KnockoutObservable<boolean>;
    add: () => void;
    remove: (item: MyPo) => void;
    itemCount: KnockoutComputed<number>;
    myMarkup: KnockoutObservable<string | undefined>;
    isTextBoxDisabled: KnockoutObservable<boolean | undefined>;
    disableEnable: () => void;
    visibleIf: () => boolean;
    objectWith: {
        prop1: string;
        prop2: string;
    };
    categories: KnockoutObservableArray<{
        name: string;
        items: string[];
    }>;
    foreachInCom: KnockoutObservableArray<string>;
}
