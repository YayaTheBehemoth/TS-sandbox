import { MockDB } from "../mockDB/mockDB";

export class NotificationService{
    private db: MockDB;
    constructor(mdb:MockDB){
        this.db = mdb;
    }}
    //create? 
    //delete? - mark as read? 
    //send? or are you forced to send upon creation?
    //get or getall?
    //update?

