import { Customer } from '../models/Customer';
import { bookingTask } from '../models/bookingTask';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/bookingRequest';
import { bookingResponse } from '../models/bookingResponse';
import { TaskStatus } from '../models/Task';
/*
class CustomerTable {
    customers: Customer[] = [
        new Customer(1, "Customer1", []),
        new Customer(2, "Customer2", [])
    ];

 ¨------------------------------------------------IM GOOD AT MAKING MISTAKES :`)----------------------------------------------
    
    
}

class PartnerTable {
    partners: Partner[] = [
        new Partner(1, "Partner1", []),
        new Partner(2, "Partner2", [])
    ];

    getPartner(id: number): Partner | undefined {
        return this.partners.find(partner => partner.id === id);
    }
    
   
}

class BookingResponseTable {
    responses: bookingResponse[] = [
        new bookingResponse(1, new bookingRequest(1, new Partner(1, "Partner1", []), new bookingTask(1, "Task1", new Customer(1, "Customer1", []), []), false),
    ];

    getBookingResponse(id: number): bookingResponse | undefined {
        return this.responses.find(response => response.id === id);
    }
    
 
}

class BookingTaskTable {
    tasks: bookingTask[] = [
        new bookingTask(1, "Task1", new Customer(1, "Customer1", []), []),
    ];

    getBookingTask(id: number): bookingTask | undefined {
        return this.tasks.find(task => task.id === id);
    }
    
    
}

class BookingRequestTable {
    requests: bookingRequest[] = [
        new bookingRequest(1, new Partner(1, "Partner1", []), new bookingTask(1, "Task1", new Customer(1, "Customer1", []), []),];

    getBookingRequest(id: number): bookingRequest | undefined {
        return this.requests.find(request => request.id === id);
    }

}

export class MockDB {
    customers = new CustomerTable();
    partners = new PartnerTable();
    bookingResponses = new BookingResponseTable();
    bookingTasks = new BookingTaskTable();
    bookingRequests = new BookingRequestTable();

}
  */  
 //Disregard previous code, this is the actual mockDB.ts
class CustomerTable {
    customerdata: Customer[] = [];
}

class PartnerTable {
    partnerdata: Partner[] = [];
}

class BookingResponseTable {
    responsedata: bookingResponse[] = [];
}

class BookingTaskTable {
    taskdata: bookingTask[] = [];
}

class BookingRequestTable {
    requestdata: bookingRequest[] = [];
}

export class MockDB {
    customers = new CustomerTable();
    partners = new PartnerTable();
    bookingResponses = new BookingResponseTable();
    bookingTasks = new BookingTaskTable();
    bookingRequests = new BookingRequestTable();

    constructor() {
        this.initializeData();

    }

    private initializeData(): void {
        const customer1 = new Customer(1, "Customer1");
        const customer2 = new Customer(2, "Customer2");
        const partner1 = new Partner(1, "Partner1");
        const partner2 = new Partner(2, "Partner2");

        const task1 = new bookingTask(1, "Task1", TaskStatus.OPEN,customer1, []);
        const task2 = new bookingTask(2, "Task2",TaskStatus.OPEN, customer2, []);
        const partnerarr = [partner1, partner2];
        const request1 = new bookingRequest(1, partner1, task1, undefined);
        const request2 = new bookingRequest(2, partner2, task2, undefined);

        const response1 = new bookingResponse(1,partner1 ,request1,new Date(), false,"hej");
        const response2 = new bookingResponse(2, partner2,request2,new Date(), true, "hejsa");

        this.customers.customerdata.push(customer1, customer2);
        this.partners.partnerdata.push(partner1, partner2);
        this.bookingTasks.taskdata.push(task1, task2);
        this.bookingRequests.requestdata.push(request1, request2);
        this.bookingResponses.responsedata.push(response1, response2);
    }
}


 