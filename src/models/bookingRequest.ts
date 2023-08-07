
import { bookingTask } from './bookingTask';
import { Partner } from './Partner';
import { bookingResponse } from './bookingResponse';
export class bookingRequest {
    constructor(
        public id: number,
        public partner: Partner,
        public task: bookingTask,
        public responses: bookingResponse[] = []
    ) { }
}