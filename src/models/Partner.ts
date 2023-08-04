import { taskRequest } from './Request';
export class Partner {
    id: number;
    name: string;
    requests?: taskRequest[];

    constructor(id: number, name: string, requests: taskRequest[] = []) {
        this.id = id;
        this.name = name;
        this.requests = requests;
    }}




