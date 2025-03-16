import { makeAutoObservable } from "mobx";

export class ModalModel {
    public isOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    public setIsOpen() {
        this.isOpen = !this.isOpen;
    }
}
