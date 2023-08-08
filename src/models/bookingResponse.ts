
import { bookingRequest } from './bookingRequest';
import { Partner } from './Partner';
import { Response} from './Response';
export class bookingResponse extends Response {
    constructor(
        id: number,
        public partner: Partner,
        public request: bookingRequest , //might be better to let this be a reference to the request rather than the request itself 
        public answeredAt: Date = new Date(),
        public isDelegated: boolean = false,
        public comment: string 
    ) {
        super(id);
    }
}
