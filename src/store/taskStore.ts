import { makeAutoObservable } from "mobx";

export interface ITask {
    id: number;
    name: string;
    description: string;
    status: boolean;
    type: "дом" | "работа" | "увлечения";
}

class TaskStore {
    tasks: ITask[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(task: { name: string; description: string; type: "дом" | "работа" | "увлечения" }) {
        let newTask: ITask = { ...task, status: false, id: this.tasks.length + 1 };
        this.tasks.push(newTask);
    }

    removeTask(id: number) {
        this.tasks = this.tasks.filter((el) => el.id !== id);
    }

    changeStatusTask(id: number) {
        this.tasks.map((el) => {
            if (el.id === id) {
                el.status = !el.status;
            }
        });
    }
}

export const taskStore = new TaskStore();
