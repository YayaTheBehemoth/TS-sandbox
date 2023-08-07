// CustomerService.ts
import { Customer } from '../models/Customer';
import { bookingTask } from '../models/Task';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/Request';
import { bookingResponse } from '../models/Response';
import {MockDB} from '../mockDB/mockDB';
export class CustomerService {
  private db: MockDB;

  constructor(db: MockDB) {
      this.db = db;
  }
  async createCustomer(id: number, name: string, tasks: bookingTask[]): Promise<Customer> {
    let newCustomer = new Customer(id, name, tasks);
    this.db.customers.customerdata.push(newCustomer);
    return newCustomer;
  }

  async getCustomer(id: number): Promise<Customer | null> {
    let customer = this.db.customers.customerdata.find(c => c.id === id);
    return customer || null;
  }

  async updateCustomer(id: number, name: string, tasks: bookingTask[]): Promise<Customer| null> {
    this.db.customers.customerdata.forEach(customer => {
      if (customer.id === id) {
        customer.name = name;
        customer.tasks = tasks;
      }
    });
    return this.getCustomer(id);
  }

  async deleteCustomer(id: number): Promise<void> {
    
    this.db.customers.customerdata.forEach(customer => {
      if (customer.id === id) {
        this.db.customers.customerdata.splice(this.db.customers.customerdata.indexOf(customer), 1);
      }
    });
  }
}
