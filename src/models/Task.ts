export abstract class Task{
    constructor(
        public id: number,
        public name: string,
        public status: TaskStatus = TaskStatus.OPEN,
 
    ) {}
}
// to represent a tasks status
export enum TaskStatus {
    OPEN = 'open',
    CLOSED = 'closed',
}