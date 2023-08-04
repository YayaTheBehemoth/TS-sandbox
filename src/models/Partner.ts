import { taskRequest } from './Request';
export class Partner {
    constructor(
        public id: number,
        public name: string,
        public requests: taskRequest[] = []
    ) { }
}




