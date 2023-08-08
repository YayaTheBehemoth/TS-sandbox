//testfile
/*
import { Customer } from './models/Customer';
import { bookingTask } from './models/bookingTask';
import { Partner } from './models/Partner';
import { bookingRequest } from './models/bookingRequest';
import { bookingResponse } from './models/bookingResponse';
import { Task } from './models/Task';
import { TaskStatus } from './models/Task';

//Controltest - this should always pass!
it("hey dummy", ()=>{
    expect(1).toBe(1);
})
//"Handwritten tests"
/*
NOTE: IS THE "ACCESS" RELATION SYMMETRICAL?  
it("A task can access its own customer", ()=>{
    const customer = new Customer("peter");
    const task = new Task(customer);
    expect(task.customer).toBe(customer);
})


it("A request can access its own task", ()=>{
    const customer = new Customer("peter");
    const task = new Taskk(customer);
    const request = new Requestt(task)
    expect(request.task).toBe(task);
})


it("A response can access its own request", ()=>{
    const partner = new Partner("Jessiah")
    const request = new Requestt(partner)
    const response = new Responsee(request)
    expect(response.request).toBe(request);
})
*/
//AI-generated tests
/*
describe('Class relations tests', () => {
    it("A task can access its own customer", () => {
        const customer = new Customer(1, "John");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN,customer);
        customer.tasks ? customer.tasks.push(task) : customer.tasks = [task];
        expect(task.customer).toBe(customer);
    })

    it("A request can access its own task", () => {
        const partner = new Partner(1, "Partner1");
        const customer = new Customer(2, "Jane");
        const task = new bookingTask(2, "Task2", TaskStatus.OPEN,customer);
        const partnerarray = [partner];
        customer.tasks ? customer.tasks.push(task) : customer.tasks = [task];
        const request = new bookingRequest(1, partner, task);
        partner.requests ? partner.requests.push(request) : partner.requests = [request];
        expect(request.task).toBe(task);
    })

    it("A response can access its own request", () => {
        const partner = new Partner(2, "Partner2");
        const customer = new Customer(3, "Jill");
        const task = new bookingTask(3, "Task3",TaskStatus.OPEN, customer);
        
        customer.tasks ? customer.tasks.push(task) : customer.tasks = [task];
        const request = new bookingRequest(2, partner, task,response);
        partner.requests ? partner.requests.push(request) : partner.requests = [request];
        const response = new bookingResponse(1, partner, request,undefined, true,"hej");
        request.responses ? request.responses.push(response) : request.responses = [response];
        expect(response.request).toBe(request);
        expect(response.answeredAt).toBeInstanceOf(Date);  // check if 'answeredAt' is a Date object
    })

    it("A customer can access their tasks ", () => {
        const customer = new Customer(4, "Jack");
        const task1 = new bookingTask(4, "Task4",TaskStatus.OPEN, customer);
        const task2 = new bookingTask(5, "Task5", TaskStatus.OPEN,customer);
        customer.tasks ? customer.tasks.push(task1, task2) : customer.tasks = [task1, task2];
        expect(customer.tasks).toContain(task1);
        expect(customer.tasks).toContain(task2);
    })

    it("A partner can access their requests", () => {
        const customer = new Customer(5, "Julia");
        const task = new bookingTask(6, "Task6", TaskStatus.OPEN,customer);
        customer.tasks ? customer.tasks.push(task) : customer.tasks = [task];
        const partner = new Partner(3, "Partner3");
       
        const request1 = new bookingRequest(5, partner ,task);
        const request2 = new bookingRequest(6, partner, task);
        partner.requests ? partner.requests.push(request1, request2) : partner.requests = [request1, request2];
        expect(partner.requests).toContain(request1);
        expect(partner.requests).toContain(request2);
    })
  
})
  */
import { MockDB } from './mockDB/mockDB';
import { Partner } from './models/Partner';
import { bookingTask } from './models/bookingTask';
import { bookingResponse } from './models/bookingResponse';
import { BookingRequestService } from './services/BookingRequestService';
import { BookingResponseService } from './services/BookingResponseService';
import { BookingTaskService } from './services/BookingTaskService';
import { CustomerService } from './services/CustomerService';
import { PartnerService } from './services/PartnerService';
import { Customer } from './models/Customer';
import { TaskStatus } from './models/Task';
import { bookingRequest } from './models/bookingRequest';

let mockDB: MockDB;
let bookingRequestService: BookingRequestService;
let bookingResponseService: BookingResponseService;
let bookingTaskService: BookingTaskService;
let customerService: CustomerService;
let partnerService: PartnerService;

beforeEach(() => {
  mockDB = new MockDB();
  
  bookingRequestService = new BookingRequestService(mockDB);
  bookingResponseService = new BookingResponseService(mockDB);
  bookingTaskService = new BookingTaskService(mockDB);
  customerService = new CustomerService(mockDB);
  partnerService = new PartnerService(mockDB);
});

// ...
/* RELEVANT BUT NEEDS TO BE REWRITTEN TO FIT THE NEW CODE
// Tests for BookingRequestService
test('createBookingRequest adds a new bookingRequest to the database', async () => {
    const partner = new Partner(1, 'Partner1', []);
    const customer = new Customer(1, 'Customer1', []);
    const task = new bookingTask(1, 'Task1', TaskStatus.OPEN, customer, []);
    const response = new bookingResponse(1, partner, new bookingRequest(1, partner, task, undefined), new Date(), false, 'Test comment');
    const newBookingRequest = await bookingRequestService.createBookingRequest(1, partner, task, response);
    expect(mockDB.bookingRequests.requestdata).toContain(newBookingRequest);
  });
  
  // Tests for BookingResponseService
  test('createBookingResponse adds a new bookingResponse to the database', async () => {
    const partner = new Partner(1, 'Partner1', []);
    const customer = new Customer(1, 'Customer1', []);
    const task = new bookingTask(1, 'Task1', TaskStatus.OPEN, customer, []);
  
   
    const newBookingResponse = await bookingResponseService.createBookingResponse(1, partner, new bookingRequest(1, partner, task), false, new Date(), 'Test comment');
    const request = new bookingRequest(1, partner, task, newBookingResponse);
    expect(mockDB.bookingResponses.responsedata).toContain(newBookingResponse);
  });
  
  // Tests for BookingTaskService
  test('createBookingTask adds a new bookingTask to the database', async () => {
    const customer = new Customer(1, 'Customer1', []);
    const newBookingTask = await bookingTaskService.createBookingTask(1, 'Task1', TaskStatus.OPEN, customer, []);
    expect(mockDB.bookingTasks.taskdata).toContain(newBookingTask);
  });
  
  // Tests for CustomerService
  test('createCustomer adds a new customer to the database', async () => {
    const newCustomer = await customerService.createCustomer(1, 'Customer1', []);
    expect(mockDB.customers.customerdata).toContain(newCustomer);
  });
  
  // Tests for PartnerService
  test('createPartner adds a new partner to the database', async () => {
    const newPartner = await partnerService.createPartner(1, 'Partner1', []);
    expect(mockDB.partners.partnerdata).toContain(newPartner);
  });
*/
 
describe('Booking services tests', () => {
    it("createBookingRequest adds the new request to the correct arrays", async () => {
        const partner = new Partner(1, "Partner1");
        const customer = new Customer(1, "John");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN, customer);
        const request = await bookingRequestService.createBookingRequest(1, partner, task);

        expect(partner.requests).toContain(request);
        expect(task.requests).toContain(request);
    });
    
    it("createBookingResponse adds the new response to the correct arrays", async () => {
        const partner = new Partner(2, "Partner2");
        const customer = new Customer(2, "Jane");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN, customer);
        const request = await bookingRequestService.createBookingRequest(2805, partner, task);
        const response = await bookingResponseService.createBookingResponse(9735, partner, request, true, new Date(), "Test comment");

        expect(partner.requests).toContain(request);
        expect(request.responses).toContain(response);
    });
    
    it("createBookingTask adds the new task to the correct arrays", async () => {
        const customer = new Customer(752, "Julia");
        const task = await bookingTaskService.createBookingTask(3, "Task3", TaskStatus.OPEN, customer);

        expect(customer.tasks).toContain(task);
    });
});
describe('Booking services tests', () => {
    it("getBookingTask returns the correct task", async () => {
       
        const customer = new Customer(239, "John");
        const task = await bookingTaskService.createBookingTask(733, "Task1", TaskStatus.OPEN, customer);
        const retrievedTask = await bookingTaskService.getBookingTask(733);

        expect(retrievedTask).toBe(task);
    });

    it("getBookingRequest returns the correct request", async () => {
     
        const partner = new Partner(940, "Partner1");
        const customer = new Customer(666, "Jane");
        const task = new bookingTask(803, "Task2", TaskStatus.OPEN, customer);
        const request = await bookingRequestService.createBookingRequest(830, partner, task);
        const retrievedRequest = await bookingRequestService.getBookingRequest(830);

        expect(retrievedRequest).toBe(request);
    });

    it("getBookingResponse returns the correct response",async () => {
        
        const partner = new Partner(749, "Partner2");
        const customer = new Customer(738, "Jill");
        const task = new bookingTask(186, "Task3", TaskStatus.OPEN, customer);
        const request = new bookingRequest(789, partner, task);
        const response = await bookingResponseService.createBookingResponse(573, partner, request, true, new Date(), "Test comment");
        const retrievedResponse = await bookingResponseService.getBookingResponse(573);

        expect(retrievedResponse).toBe(response);
    });
});
describe('Booking services tests', () => {
    it("createBookingTask creates a new task", async() => {
       
        const customer = new Customer(491, "John");
        const task = await bookingTaskService.createBookingTask(295, "Task1",TaskStatus.OPEN,customer);

        expect(task).toBeInstanceOf(bookingTask);
        expect(task.id).toBe(295);
        expect(task.name).toBe("Task1");
        expect(task.customer).toBe(customer);
        // If your service adds tasks to a data store, you might also check that the task was added:
        // expect(taskService.getBookingTask(1)).toBe(task);
    });

    it("createBookingRequest creates a new request", async () => {
       
        const partner = new Partner(334, "Partner1");
        const customer = new Customer(366, "Jane");
        const task = new bookingTask(827, "Task2", TaskStatus.OPEN, customer);
        const request = await bookingRequestService.createBookingRequest(547, partner, task);

        expect(request).toBeInstanceOf(bookingRequest);
        expect(request.id).toBe(547);
        expect(request.partner).toBe(partner);
        expect(request.task).toBe(task);
        // If your service adds requests to a data store, you might also check that the request was added:
        // expect(requestService.getBookingRequest(1)).toBe(request);
    });

    it("createBookingResponse creates a new response",async () => {

        const partner = new Partner(427, "Partner2");
        const customer = new Customer(349, "Jill");
        const task = new bookingTask(960, "Task3", TaskStatus.OPEN, customer);
        const request = new bookingRequest(447, partner, task);
        const response = await bookingResponseService.createBookingResponse(942, partner, request, true, new Date(), "Test comment");

        expect(response).toBeInstanceOf(bookingResponse);
        expect(response.id).toBe(942);
        expect(response.partner).toBe(partner);
        expect(response.request).toBe(request);
        expect(response.isDelegated).toBe(true);
        // If your service adds responses to a data store, you might also check that the response was added:
        // expect(responseService.getBookingResponse(1)).toBe(response);
    });
});
describe('Booking services delete tests', () => {
    it("deleteBookingTask deletes a task correctly", async () => {
        const customer = new Customer(1, "John");
        const task = await bookingTaskService.createBookingTask(1, "Task1", TaskStatus.OPEN, customer);
        await bookingTaskService.deleteBookingTask(1);
        const deletedTask = await bookingTaskService.getBookingTask(1);

        expect(deletedTask).toBeNull();
    });

    it("deleteBookingRequest deletes a request correctly", async () => {
        const partner = new Partner(1, "Partner1");
        const customer = new Customer(2, "Jane");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN, customer);
        const request = await bookingRequestService.createBookingRequest(55, partner, task);
        await bookingRequestService.deleteBookingRequest(55);
        const deletedRequest = await bookingRequestService.getBookingRequest(55);

        expect(deletedRequest).toBeNull();
    });

    it("deleteBookingResponse deletes a response correctly", async () => {
        const partner = new Partner(1, "Partner1");
        const customer = new Customer(3, "Jill");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN, customer);
        const request = new bookingRequest(1, partner, task);
        const response = await bookingResponseService.createBookingResponse(1, partner, request, true, new Date(), "Test comment");
        await bookingResponseService.deleteBookingResponse(1);
        const deletedResponse = await bookingResponseService.getBookingResponse(1);

        expect(deletedResponse).toBeNull();
    });
});
describe('Booking services update tests', () => {
    it("updateBookingTask updates a task correctly", async () => {
        const customer = new Customer(1, "John");
        let task = await bookingTaskService.createBookingTask(1, "Task1", TaskStatus.OPEN, customer);
        await bookingTaskService.updateBookingTask(1, "UpdatedTask", TaskStatus.CLOSED, customer,[]);
        
        expect(task.name).toBe("UpdatedTask");
        expect(task.status).toBe(TaskStatus.CLOSED);
    });

    it("updateBookingRequest updates a request correctly", async () => {
        const partner = new Partner(1, "Partner1");
        const customer = new Customer(2, "Jane");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN, customer);
        let request = await bookingRequestService.createBookingRequest(1, partner, task);
        await bookingRequestService.updateBookingRequest(1, new Partner(2, "UpdatedPartner"), task);

        expect(request.partner.name).toBe("UpdatedPartner");
    });

    it("updateBookingResponse updates a response correctly", async () => {
        const partner = new Partner(1, "Partner1");
        const customer = new Customer(3, "Jill");
        const task = new bookingTask(1, "Task1", TaskStatus.OPEN, customer);
        const request = new bookingRequest(1, partner, task);
        let response = await bookingResponseService.createBookingResponse(1, partner, request, true, new Date(), "Test comment");
        await bookingResponseService.updateBookingResponse(1,request, new Date(), false ,"Updated comment");

        expect(response.isDelegated).toBe(false);
        expect(response.comment).toBe("Updated comment");
    });
});
describe('BookingResponseService tests', () => {
    it("delegateBookingResponse sets isDelegated to true", async () => {
        const randomId = Math.floor(Math.random() * 10000) + 4;
        const partner = new Partner(randomId, "Partner1");
        const customer = new Customer(randomId, "John");
        const task = new bookingTask(randomId, "Task1", TaskStatus.OPEN, customer);
        const request = new bookingRequest(randomId, partner, task);
        let response = await bookingResponseService.createBookingResponse(randomId, partner, request, false, new Date(), "Test comment");
        
        expect(response.isDelegated).toBe(false);

         await bookingResponseService.delegateBookingResponse(randomId);

        expect(response).not.toBeNull();
        expect(response?.isDelegated).toBe(true);
    });
});




  
  // Add additional tests for the rest of the methods
  
