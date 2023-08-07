//testfile
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
        const request = new bookingRequest(2, partner, task);
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


