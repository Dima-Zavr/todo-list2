import { action, makeObservable, observable } from "mobx";
import { ModalModel } from "./ModalModel";
import { Type } from "../interfaces/Task/TaskInterfaces";

export class TaskModalModel extends ModalModel {
    public name = "";
    public description = "";
    public type: Type = "";

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
            getTask: action
        });
    }

    public setName(name: string) {
        this.name = name;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setType(type: Type) {
        this.type = type;
    }

    public getTask() {
        return {
            name: this.name,
            description: this.description,
            type: this.type
        };
    }

    public Close() {
        this.isOpen = false;
        this.name = "";
        this.description = "";
        this.type = "";
    }
}
