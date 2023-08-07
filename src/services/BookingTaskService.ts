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
    let newBookingTask = new bookingTask(id, name, customer, requests);
    this.db.bookingTasks.taskdata.push(newBookingTask);
    return newBookingTask;
  }

  async getBookingTask(id: number): Promise<bookingTask | null> {
    let bookingTask = this.db.bookingTasks.taskdata.find(c => c.id === id);
    return bookingTask|| null;
  }

  async updateBookingTask(id: number, name: string, customer: Customer, requests: bookingRequest[]): Promise< bookingTask| null> {
    this.db.bookingTasks.taskdata.forEach(bookingTask => {
      if (bookingTask.id === id) {
        bookingTask.name = name;
        bookingTask.customer = customer;
        bookingTask.requests = requests;
      }
    });
    return this.getBookingTask(id);
  }

  async deleteBookingTask(id: number): Promise<void> {
    this.db.bookingTasks.taskdata.forEach(bookingTask => {
      if (bookingTask.id === id) {
        this.db.bookingTasks.taskdata.splice(this.db.bookingTasks.taskdata.indexOf(bookingTask), 1);
      }
    });
  }
}
