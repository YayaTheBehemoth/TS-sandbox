import { Task } from './Task';
export class Customer {
    id: number;
    name: string;
    tasks?: Task[];

    constructor(id: number, name: string, tasks: Task[] = []) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }}