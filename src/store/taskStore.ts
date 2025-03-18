import { makeAutoObservable } from "mobx";
import { TaskModel } from "../models/TaskModel";
import { IModalTask } from "../interfaces/Modal/ModalInterfaces";

class TaskStore {
    public tasks: TaskModel[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public addTask(task: IModalTask) {
        const newTask = new TaskModel({ ...task, id: this.tasks.length + 1 })
        this.tasks.push(newTask);
    }

    public removeTask(id: number) {
        this.tasks = this.tasks.filter((el) => el.id !== id);
    }
}

export const taskStore = new TaskStore();
