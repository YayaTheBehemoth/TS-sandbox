//Ideally named "Response" but that conflicts with some existing stuff"
import { taskRequest } from './Request';
export class taskResponse {
    constructor(
        public id: number,
        public request: taskRequest,
        public isDelegated: boolean
    ) { }
}
