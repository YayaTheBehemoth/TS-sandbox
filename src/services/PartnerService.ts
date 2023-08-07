// PartnerService.ts
import { Customer } from '../models/Customer';
import { bookingTask } from '../models/Task';
import { Partner } from '../models/Partner';
import { bookingRequest } from '../models/Request';
import { bookingResponse } from '../models/Response';
import {MockDB} from '../mockDB/mockDB';

export class PartnerService {
  private db: MockDB;

  constructor(db: MockDB) {
      this.db = db;
  }
 
  async createPartner(id: number, name: string, requests: bookingRequest[]): Promise<Partner> {
    // TODO: implement the create logic
  }

  async getPartner(id: number): Promise<Partner | null> {
  
  }

  async updatePartner(id: number, name: string, requests: bookingRequest[]): Promise<Partner> {
    // TODO: implement the update logic
  }

  async deletePartner(id: number): Promise<void> {
    // TODO: implement the delete logic
  }
}
