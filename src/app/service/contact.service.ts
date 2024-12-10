import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContacDTO } from '../dto/contac-dto';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private scriptUrl = '/api/macros/s/AKfycbzRKZg-i0XNe6g70MyEQP4pxp4czzT0P4A5P4CKaGDRUH-JQg4bcTvY8DuKPShOq00P/exec'

  constructor(private http: HttpClient) { }

  sendContact(contact: ContacDTO) {
    return this.http.post(this.scriptUrl, contact);
  }
}
