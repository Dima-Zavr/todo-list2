export type Priority = "1" | "2" | "3" | "4" | "";

export const PriorityColor = {
    "1": "error",
    "2": "warning",
    "3": "success",
    "4": "primary",
    "": "primary"
};
export const PriorityLabel = {
    "1": "Срочно и важно",
    "2": "Не срочно но важно",
    "3": "Срочно но неважно",
    "4": "Не срочно и неважно",
    "": "Нет приоритета"
};

export interface ITask {
    id: number;
    value: string;
    isChecked: boolean;
}

export interface IModalData {
    name: string;
    type: Priority;
    tasks: ITask[];
}

export interface INotepad extends IModalData {
    id: number;
    date?: Date;
}
