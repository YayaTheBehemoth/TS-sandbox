import { bookingRequest } from './bookingRequest';
export class Partner {
    constructor(
        public id: number,
        public name: string,
        public requests: bookingRequest[] = [] 
    ) { }
     }




