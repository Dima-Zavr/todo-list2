import { makeObservable } from "mobx";

export class ModalModel {
    public isOpen = false;

    constructor() {
        makeObservable(this, {}, { autoBind: true });
    }

    public Open() {
        this.isOpen = true;
    }

    public Close() {
        this.isOpen = false;
    }
}
