//Ideally named "request" but that conflicts with some existing stuff"
import { bookingTask } from './Task';
import { Partner } from './Partner';
import { bookingResponse } from './Response';
export class bookingRequest {
    constructor(
        public id: number,
        public partner: Partner,
        public task: bookingTask,
        public responses: bookingResponse[] = []
    ) { }
}