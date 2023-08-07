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
    // TODO: implement the create logic
  }

  async getCustomer(id: number): Promise<Customer | null> {
    let customer = this.db.customers.customerdata.find(c => c.id === id);
    return customer || null;
  }

  async updateCustomer(id: number, name: string, tasks: bookingTask[]): Promise<Customer> {
    // TODO: implement the update logic
  }

  async deleteCustomer(id: number): Promise<void> {
    // TODO: implement the delete logic
  }
}
