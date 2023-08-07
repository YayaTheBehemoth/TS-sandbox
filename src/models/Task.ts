import { bookingRequest } from './Request';
import { Customer } from './Customer';
export class bookingTask {
    constructor(
        public id: number,
        public name: string,
        public customer: Customer,
        public requests: bookingRequest[] = []
    ) { }
}