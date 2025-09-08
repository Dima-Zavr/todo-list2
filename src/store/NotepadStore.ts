import { makeAutoObservable } from "mobx";
import { NotepadModel } from "../models/NotepadModel";
import { INotepad } from "../interfaces/Notepad/NotepadInterface";

class NotepadStore {
    public notepads: NotepadModel[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public addNotepad(notepad: INotepad) {
        const newNotepad = new NotepadModel({ ...notepad, id: Date.now() })
        this.notepads.push(newNotepad);
    }

    public removeNotepad(id: number) {
        this.notepads = this.notepads.filter((el) => el.id !== id);
    }

    public updateNotepad(notepad: INotepad) {
        const index = this.notepads.findIndex((el) => el.id === notepad.id);
        this.notepads[index].setData(notepad);
    }
}

export const notepadStore = new NotepadStore();
