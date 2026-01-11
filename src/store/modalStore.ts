import { makeAutoObservable } from "mobx";
import { NotepadModalModel } from '../models/NotepadModalModel.ts';

class ModalStore {
    public modal: NotepadModalModel = new NotepadModalModel();

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
}

export const modalStore = new ModalStore();
