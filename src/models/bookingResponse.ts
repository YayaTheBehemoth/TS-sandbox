
import { bookingRequest } from './bookingRequest';
import { Partner } from './Partner';
import { Response} from './Response';
export class bookingResponse extends Response {
    constructor(
        id: number,
        public partner: Partner,
        public request: bookingRequest ,
        public answeredAt: Date = new Date(),
        public isDelegated: boolean = false,
        public comment: string
    ) {
        super(id);
    }
}
