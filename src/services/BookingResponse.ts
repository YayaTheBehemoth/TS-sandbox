// BookingResponseService.ts
import { Customer } from '../models/Customer';
import { bookingTask } from '../models/Task';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/Request';
import { bookingResponse } from '../models/Response';
import {MockDB} from '../mockDB/mockDB';
export class BookingResponseService {
  private db: MockDB;

  constructor(db: MockDB) {
      this.db = db;
  }
  async createBookingResponse(id: number, request: bookingRequest, isDelegated: boolean): Promise<bookingResponse> {
    // TODO: implement the create logic
  }
  
  async getBookingResponse(id: number): Promise<bookingResponse | null> {
    // TODO: implement the read logic
  }

  async updateBookingResponse(id: number, request: bookingRequest, isDelegated: boolean): Promise<bookingResponse> {
    // TODO: implement the update logic
  }

  async deleteBookingResponse(id: number): Promise<void> {
    // TODO: implement the delete logic
  }
}
