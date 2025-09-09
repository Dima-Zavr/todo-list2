import { makeAutoObservable } from "mobx";
import { INotepad } from "../interfaces/Notepad/NotepadInterface";

export class NotepadModel {
    public id;
    public name;
    public type;
    public date;
    public tasks;

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