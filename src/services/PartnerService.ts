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
    let NewPartner = new Partner(id, name, requests);
    this.db.partners.partnerdata.push(NewPartner);
    return NewPartner;
  }

  async getPartner(id: number): Promise<Partner | null> {
    let partner = this.db.partners.partnerdata.find(c => c.id === id);
    return partner || null;
  }

  async updatePartner(id: number, name: string, requests: bookingRequest[]): Promise<Partner| null> {
    this.db.partners.partnerdata.forEach(partner => {
      if (partner.id === id) {
        partner.name = name;
        partner.requests = requests;
      }
    });
    return this.getPartner(id);
  }

  async deletePartner(id: number): Promise<void> {
    // TODO: implement the delete logic
    this.db.partners.partnerdata.forEach(partner => {
      if (partner.id === id) {
        this.db.partners.partnerdata.splice(this.db.partners.partnerdata.indexOf(partner), 1);
      }
    });
  
}
}
