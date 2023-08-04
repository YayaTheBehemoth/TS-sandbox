import { taskRequest } from './Request';
import { Customer } from './Customer';
export class Task {
    constructor(
        public id: number,
        public name: string,
        public customer: Customer,
        public requests: taskRequest[] = []
    ) { }
}