import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Correct import from @angular/forms
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',  
  styleUrls: ['./contact.component.css'],  
  imports: [NgIf, NgFor, FormsModule]
})
export class ContactComponent {

  private scriptURL = '/api/macros/s/AKfycbz56PLXURw-gSUQzSzyl3eHSVFINhV9sVYWP1wMngwJAXHHIFFYv2mj22ucFQ85YqeD/exec';
  
  formData = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    address: '',
    reportType: '',
    otherReport: '',
    propertyType: '',
    purposeType: '',
    otherPurpose: '',
    dwellingStyleType: '',
    dwellingType: '',
    otherDwellingType: '',
    additionalInfo: '',
    purchaseType: '',
    constructionCompany: '',
    otherConstructionCompany: '',
    houseModel: '',
    purchasePrice: '',
    mortgageType: '',
    lender: '',
    refinanceAmount: '',
    loanToValue: '',
    relocationType: '',
    otherRelocationType: '',
    referenceNumber: '',
    condoFees: '',
    parking: '',
    parkingType: '',
    parkingSpaces: '',
    locker: '',
    specialAssessments: '',
    //attachments: <File[]>[] // Uncomment this if you intend to use file attachments
  };

  constructor() {}

  onSubmit() {
    if (!this.formData.firstName || !this.formData.emailAddress) {
      console.error('First name and email are required');
      return;
    }
  
    fetch(this.scriptURL, {
      redirect: 'follow',
      method: 'POST',
      body: JSON.stringify(this.formData),
      headers: {
        'Content-Type': 'application/json',  // Cambia a 'application/json' para enviar en JSON
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Si la respuesta es exitosa, simplemente muestra un mensaje en consola
      console.log("Datos enviados correctamente");
    })
    .catch(error => {
      console.error('Error enviando datos', error);
    });
  
    console.log('Form Submitted!', this.formData);
  }

  handleFileInput(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      //this.formData.attachments.push(files[i]); // Uncomment this if you implement file handling
    }
  }
}
