import { makeAutoObservable } from "mobx";
import { ITask } from "../interfaces/Task/TaskInterfaces";

export class TaskModel {
    public id;
    public name;
    public description;
    public status;
    public type;

    constructor(task : ITask) {
        makeAutoObservable(this, {}, { autoBind: true });
        this.id = task.id;
        this.name = task.name;
        this.description = task.description;
        this.status = false;
        this.type = task.type;
    }

    public changeStatusTask() {
        this.status = !this.status
    }
}