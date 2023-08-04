//Ideally named "Response" but that conflicts with some existing stuff"
import { taskRequest } from './Request';
export class taskResponse {
    id: number;
    request: taskRequest;
    is_delegated: boolean;

    constructor(id: number, request: taskRequest, is_delegated: boolean) {
        this.id = id;
        this.request = request;
        this.is_delegated = is_delegated;
    }
}