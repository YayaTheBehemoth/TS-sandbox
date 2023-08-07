import { bookingRequest } from './bookingRequest';
import { Customer } from './Customer';
import { Task } from './Task';
import { TaskStatus } from './Task';
export class bookingTask extends Task {
    constructor(
        id: number,
        name: string,
        status: TaskStatus,
        public customer: Customer,
        public requests: bookingRequest[] = []
    ) {
        super(id, name, status);
    }
}