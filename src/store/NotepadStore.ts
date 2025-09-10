import { makeAutoObservable, autorun } from "mobx";
import { NotepadModel } from "../models/NotepadModel";
import { INotepad } from "../interfaces/Notepad/NotepadInterface";

class NotepadStore {
    public notepads: NotepadModel[] = [];
    public filterNotepads: NotepadModel[] = [];

    constructor() {
        const newNotepad = JSON.parse(localStorage.getItem("notepads") ?? "[]");
        console.log(newNotepad);
        newNotepad.forEach((el: INotepad) => {
            this.notepads.push(new NotepadModel(el));
        });
        makeAutoObservable(this, {}, { autoBind: true });
        autorun(() => {
            localStorage.setItem("notepads", JSON.stringify(this.notepads));
            this.filterNotepads = this.notepads;
        });
    }

    public addNotepad(notepad: INotepad) {
        const newNotepad = new NotepadModel({ ...notepad, id: Date.now(), date: new Date() });
        this.notepads.unshift(newNotepad);
    }

    public removeNotepad(id: number) {
        this.notepads = this.notepads.filter((el) => el.id !== id);
    }

    public updateNotepad(notepad: INotepad) {
        const index = this.notepads.findIndex((el) => el.id === notepad.id);
        this.notepads[index].setData(notepad);
    }

    public search(str: string) {
        if (str === "") {
            this.filterNotepads = this.notepads;
        } else {
            this.filterNotepads = this.notepads.filter(
                (notepad) =>
                    notepad.name.toLowerCase().includes(str.trim().toLowerCase()) ||
                    notepad.tasks.some((task) => task.value.toLowerCase().includes(str.trim().toLowerCase()))
            );
        }
    }
}

export const notepadStore = new NotepadStore();
