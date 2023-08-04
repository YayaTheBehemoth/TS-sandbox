//Ideally named "request" but that conflicts with some existing stuff"
import { Task } from './Task';
import { Partner } from './Partner';
import { taskResponse } from './Response';
export class taskRequest {
    id: number;
    partner: Partner;
    task: Task;
    responses?: taskResponse[];

    constructor(id: number, partner: Partner, task: Task, responses: taskResponse[] = []) {
        this.id = id;
        this.partner = partner;
        this.task = task;
        this.responses = responses;
    }


}