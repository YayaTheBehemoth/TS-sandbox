import { bookingRequest } from './Request';
export class Partner {
    constructor(
        public id: number,
        public name: string,
        public requests: bookingRequest[] = [] 
    ) { }
     }




