
import { bookingTask } from './bookingTask';
import { Partner } from './Partner';
import { bookingResponse } from './bookingResponse';
import { Request } from './Request';
export class bookingRequest extends Request {
    constructor(
        id: number,
        public partner: Partner,
        public task: bookingTask,
        public responses?: bookingResponse
    ) {
        super(id);
     }
}