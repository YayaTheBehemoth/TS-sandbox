import { Partner } from './Partner';
export class Notification {
        constructor(
            public id: number,
            public type: string,
            public content: string,
            public partners: Partner[] = [],
        ) { }
}