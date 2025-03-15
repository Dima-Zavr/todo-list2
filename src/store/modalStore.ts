import { makeAutoObservable } from "mobx";


class ModalStore {
    isOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpen() {
        this.isOpen = !this.isOpen;
    }
}

export const modalStore = new ModalStore();
