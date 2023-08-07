
import { bookingRequest } from './bookingRequest';
import { Partner } from './Partner';
export class bookingResponse {
    constructor(
        public id: number,
        public partner: Partner,
        public request: bookingRequest ,
        public answeredAt: Date = new Date(),
        public isDelegated: boolean = false,
        public comment: string
    ) {
        
    }
}
