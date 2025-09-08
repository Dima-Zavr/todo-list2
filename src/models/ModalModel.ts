import { makeObservable } from "mobx";

export class ModalModel {
    public title = "";
    public isOpen = false;

    constructor() {
        makeObservable(this, {}, { autoBind: true });
    }

    public open(title: string) {
        this.title = title;
        this.isOpen = true;
    }

    public close() {
        this.isOpen = false;
    }
}
