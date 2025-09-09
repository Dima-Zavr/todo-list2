export type Priority = "Срочно и важно" | "Не срочно но важно" | "Срочно но неважно" | "Не срочно и неважно" | "";

export const PriorityColor = {
    "Срочно и важно": "error",
    "Не срочно но важно": "warning",
    "Срочно но неважно": "success",
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
    status?: boolean;
    type: Priority;
    date: Date;
    tasks: ITask[];
}
