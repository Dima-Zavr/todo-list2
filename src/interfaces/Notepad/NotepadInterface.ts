export type Priority = "Срочно и важно" | "Не срочно и важно" | "Срочно и неважно" | "Не срочно и неважно" | "";

export const PriorityColor = {
    "Срочно и важно": "error",
    "Не срочно и важно": "warning",
    "Срочно и неважно": "success",
    "Не срочно и неважно": "primary",
    "": "primary"
}

export interface ITask {
    id: number;
    value: string;
    isChecked: boolean;
}

export interface INotepad {
    id: number;
    name: string;
    description: string;
    type: Priority;
    date: Date;
    tasks: ITask[];
}
