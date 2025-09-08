import { makeAutoObservable } from "mobx";
import { INotepad } from "../interfaces/Notepad/NotepadInterface";

export class NotepadModel {
    public id;
    public name;
    public description;
    public status;
    public type;
    public date;
    public tasks;

    constructor(modalData : INotepad) {
        makeAutoObservable(this, {}, { autoBind: true });
        this.id = modalData.id;
        this.name = modalData.name;
        this.description = modalData.description;
        this.status = false;
        this.type = modalData.type;
        this.date = new Date();
        this.tasks = modalData.tasks;
    }

    public setData(modalData : INotepad) {
        this.id = modalData.id;
        this.name = modalData.name;
        this.description = modalData.description;
        this.type = modalData.type;
        this.tasks = modalData.tasks;
    }

    public setStatus() {
        this.status = !this.status
    }
}