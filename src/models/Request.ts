//Ideally named "request" but that conflicts with some existing stuff"
import { Task } from './Task';
import { Partner } from './Partner';
import { taskResponse } from './Response';
export class taskRequest {
    constructor(
        public id: number,
        public partner: Partner,
        public task: Task,
        public responses: taskResponse[] = []
    ) { }
}