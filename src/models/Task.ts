import { taskRequest } from './Request';
import { Customer } from './Customer';
export class Task {
    id: number;
    name: string;
    customer: Customer;
    requests?: taskRequest[];
    

    constructor(id: number, name: string, customer:Customer,requests: taskRequest[] = []) {
        this.id = id;
        this.name = name;
        this.customer = customer;
        this.requests = requests;
    }

   
}