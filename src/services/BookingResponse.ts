// BookingResponseService.ts
import { Customer } from '../models/Customer';
import { bookingTask } from '../models/bookingTask';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/bookingRequest';
import { bookingResponse } from '../models/bookingResponse';
import {MockDB} from '../mockDB/mockDB';
export class BookingResponseService {
  private db: MockDB;

  constructor(db: MockDB) {
      this.db = db;
  }
  async createBookingResponse(id: number,partner: Partner, request: bookingRequest, isDelegated: boolean, answeredAt:Date, comment:string): Promise<bookingResponse> {
    let NewBookingResponse = new bookingResponse(id,partner,request, answeredAt, isDelegated, comment);
    this.db.bookingResponses.responsedata.push(NewBookingResponse);
    NewBookingResponse.request.responses ? NewBookingResponse.request.responses.push(NewBookingResponse) : NewBookingResponse.request.responses = [NewBookingResponse]; //make it so that a new response is added to the request's responses array
    return NewBookingResponse;
  }
  
  async getBookingResponse(id: number): Promise<bookingResponse | null> {
    let bookingRepsonse = this.db.bookingResponses.responsedata.find(c => c.id === id);
    return bookingRepsonse|| null;
  }

  async updateBookingResponse(id: number, request: bookingRequest): Promise<bookingResponse| null> {
    this.db.bookingResponses.responsedata.forEach(bookingResponse => {
      if (bookingResponse.id === id) {
        bookingResponse.request = request;
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
  }
  
  async delegateBookingResponse(id: number): Promise<bookingResponse| null> {
    this.db.bookingResponses.responsedata.forEach(bookingResponse => {
      if (bookingResponse.id === id) {
        bookingResponse.isDelegated = true;
      }
    });
    return this.getBookingResponse(id);
  }
}
