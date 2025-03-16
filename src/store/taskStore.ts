import { makeAutoObservable } from "mobx";
import { TaskModel } from "../models/TaskModel";

class TaskStore {
    tasks: TaskModel[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(task: { name: string; description: string; type: "дом" | "работа" | "увлечения" }) {
        const newTask = new TaskModel({ ...task, id: this.tasks.length + 1 })
        this.tasks.push(newTask);

    }

    removeTask(id: number) {
        this.tasks = this.tasks.filter((el) => el.id !== id);
    }
}

export const taskStore = new TaskStore();
