import { bookingTask } from './Task';
export class Customer {
    constructor(
        public id: number,
        public name: string,
        public tasks: bookingTask[] = []
    ) { }
    }