//Ideally named "Response" but that conflicts with some existing stuff"
import { bookingRequest } from './Request';
export class bookingResponse {
    constructor(
        public id: number,
        public request: bookingRequest,
        public isDelegated: boolean
    ) { }
}
