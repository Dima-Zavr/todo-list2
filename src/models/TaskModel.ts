import { makeAutoObservable } from "mobx";

export interface ITask {
    id: number;
    name: string;
    description: string;
    type: "дом" | "работа" | "увлечения";
}

export class TaskModel {
    public id;
    public name;
    public description;
    public status;
    public type;

    constructor({ id, name, description, type} : ITask) {
        makeAutoObservable(this);
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = false;
        this.type = type;
    }

    changeStatusTask() {
        this.status = !this.status
    }
}