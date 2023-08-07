// BookingRequestService.ts
import { Customer } from '../models/Customer';
import { bookingTask } from '../models/Task';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/Request';
import { bookingResponse } from '../models/Response';
import {MockDB} from '../mockDB/mockDB';

export class BookingRequestService {
  private db: MockDB;

  constructor(db: MockDB) {
      this.db = db;
  }
  async createBookingRequest(id: number, partner: Partner, task: bookingTask, responses: bookingResponse[]): Promise<bookingRequest> {
    let NewBookingRequest = new bookingRequest(id, partner, task, responses);
    this.db.bookingRequests.requestdata.push(NewBookingRequest);
    return NewBookingRequest;
  }

  async getBookingRequest(id: number): Promise<bookingRequest | null> {
    let bookingRequest = this.db.bookingRequests.requestdata.find(c => c.id === id);
    return bookingRequest|| null;
  }

  async updateBookingRequest(id: number, partner: Partner, task: bookingTask, responses: bookingResponse[]): Promise<bookingRequest| null> {
    this.db.bookingRequests.requestdata.forEach(bookingRequest => {
      if (bookingRequest.id === id) {
        bookingRequest.partner = partner;
        bookingRequest.task = task;
        bookingRequest.responses = responses;
      }
    });
    return this.getBookingRequest(id);
  }

  async deleteBookingRequest(id: number): Promise<void> {
    this.db.bookingRequests.requestdata.forEach(bookingRequest => {
      if (bookingRequest.id === id) {
        this.db.bookingRequests.requestdata.splice(this.db.bookingRequests.requestdata.indexOf(bookingRequest), 1);
      }
    });
  }
}
