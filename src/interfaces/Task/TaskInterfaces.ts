export type Type = "дом" | "работа" | "увлечения" | "";

export interface ITask {
    id: number;
    name: string;
    description: string;
    type: Type;
}