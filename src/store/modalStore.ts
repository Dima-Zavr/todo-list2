import { makeAutoObservable } from "mobx";
import { ModalModel } from '../models/ModalModel.ts';

class ModalStore {
    public modal: ModalModel = new ModalModel();

    constructor() {
        makeAutoObservable(this);
    }
}

export const modalStore = new ModalStore();
