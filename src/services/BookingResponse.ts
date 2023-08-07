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
    let NewBookingResponse = new bookingResponse(id, request, isDelegated);
    this.db.bookingResponses.responsedata.push(NewBookingResponse);
    return NewBookingResponse;
  }
  
  async getBookingResponse(id: number): Promise<bookingResponse | null> {
    let bookingRepsonse = this.db.bookingResponses.responsedata.find(c => c.id === id);
    return bookingRepsonse|| null;
  }

  async updateBookingResponse(id: number, request: bookingRequest, isDelegated: boolean): Promise<bookingResponse| null> {
    this.db.bookingResponses.responsedata.forEach(bookingResponse => {
      if (bookingResponse.id === id) {
        bookingResponse.request = request;
        bookingResponse.isDelegated = isDelegated;
      }
    });
    return this.getBookingResponse(id);
  }

  async deleteBookingResponse(id: number): Promise<void> {
  this.db.bookingResponses.responsedata.forEach(bookingResponse => { 
      if (bookingResponse.id === id) {
        this.db.bookingResponses.responsedata.splice(this.db.bookingResponses.responsedata.indexOf(bookingResponse), 1);
      }
    });
    
}}
