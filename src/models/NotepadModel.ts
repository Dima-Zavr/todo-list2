import { makeAutoObservable } from "mobx";
import { INotepad, ITask, Priority } from "../interfaces/Notepad/NotepadInterface";

export class NotepadModel {
    public id: number;
    public name: string;
    public type: Priority;
    public date: Date;
    public tasks: ITask[];

    constructor(modalData : INotepad) {
        makeAutoObservable(this, {}, { autoBind: true });
        this.id = modalData.id;
        this.name = modalData.name;
        this.type = modalData.type;
        this.date = new Date(modalData.date ?? Date.now());
        this.tasks = modalData.tasks;
    }

    public setData(modalData : INotepad) {
        this.id = modalData.id;
        this.name = modalData.name;
        this.type = modalData.type;
        this.tasks = modalData.tasks;
    }

    public getData() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            date: this.date,
            tasks: this.tasks
        }
    }
}