import { makeAutoObservable } from "mobx";
import { TaskModalModel } from '../models/TaskModalModel.ts';

class ModalStore {
    public modal: TaskModalModel = new TaskModalModel();

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
}

export const modalStore = new ModalStore();
