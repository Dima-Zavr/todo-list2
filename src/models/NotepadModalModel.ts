import { action, makeObservable, observable } from "mobx";
import { ModalModel } from "./ModalModel";
import { INotepad, ITask, Priority } from "../interfaces/Notepad/NotepadInterface";

export class NotepadModalModel extends ModalModel {
    public id = 0;
    public name = "";
    public type: Priority = "";
    public tasks: ITask[] = [];

    constructor() {
        super();
        makeObservable(this, {
            isOpen: observable,
            name: observable,
            type: observable,
            setName: action,
            setType: action
        });
    }

    public setName(name: string) {
        this.name = name;
    }

    public setType(type: Priority) {
        this.type = type;
    }
    public setTasks(tasks: ITask[]) {
        this.tasks = tasks;
    }

    public setModalData(data: INotepad) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.tasks = data.tasks;
    }

    public close() {
        this.isOpen = false;
        this.name = "";
        this.type = "";
        this.tasks = [];
    }
}
