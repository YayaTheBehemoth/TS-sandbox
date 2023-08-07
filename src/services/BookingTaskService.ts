// BookingTaskService.ts
import { Customer } from '../models/Customer';
import { bookingTask } from '../models/Task';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/Request';
import { bookingResponse } from '../models/Response';
import {MockDB} from '../mockDB/mockDB';
export class BookingTaskService {
  private db: MockDB;

  constructor(db: MockDB) {
      this.db = db;
  }
  async createBookingTask(id: number, name: string, customer: Customer, requests: bookingRequest[]): Promise<bookingTask> {
    // TODO: implement the create logic
  }

  async getBookingTask(id: number): Promise<bookingTask | null> {
    // TODO: implement the read logic
  }

  async updateBookingTask(id: number, name: string, customer: Customer, requests: bookingRequest[]): Promise<bookingTask> {
    // TODO: implement the update logic
  }

  async deleteBookingTask(id: number): Promise<void> {
    // TODO: implement the delete logic
  }
}
