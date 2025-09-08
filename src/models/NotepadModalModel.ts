import { action, makeObservable, observable } from "mobx";
import { ModalModel } from "./ModalModel";
import { INotepad, ITask, Priority } from "../interfaces/Notepad/NotepadInterface";


export class NotepadModalModel extends ModalModel {
    public id = 0;
    public name = "";
    public description = "";
    public type: Priority = "";
    public date: Date = new Date();
    public tasks: ITask[] = [];

    constructor() {
        super();
        makeObservable(this, {
            isOpen: observable,
            name: observable,
            description: observable,
            type: observable,
            setName: action,
            setDescription: action,
            setType: action,
        });
    }

    public setName(name: string) {
        this.name = name;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setType(type: Priority) {
        this.type = type;
    }
    public setTasks(tasks: ITask[]){
        this.tasks = tasks;
    }
    
    public setModalData(data: INotepad) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.type = data.type;
        this.date = data.date;
        this.tasks = data.tasks;
    }
    
    public close() {
        this.isOpen = false;
        this.name = "";
        this.description = "";
        this.type = "";
    }
}
