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
    // TODO: implement the create logic
  }

  async getBookingRequest(id: number): Promise<bookingRequest | null> {
    // TODO: implement the read logic
  }

  async updateBookingRequest(id: number, partner: Partner, task: bookingTask, responses: bookingResponse[]): Promise<bookingRequest> {
    // TODO: implement the update logic
  }

  async deleteBookingRequest(id: number): Promise<void> {
    // TODO: implement the delete logic
  }
}
