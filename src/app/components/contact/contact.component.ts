import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContacDTO } from '../../dto/contac-dto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import emailjs, {type EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',  
  styleUrls: ['./contact.component.css'],  
  imports: [NgIf, NgFor, FormsModule, CommonModule]
})
export class ContactComponent implements OnInit{

  contacDto: ContacDTO = new ContacDTO();
  propertyType: string [];
  reportType: string [];
  purposeType: string[];
  purchase: string[];
  newConstruction: string[];
  refinance: string[];
  relocation: string[];
  modelHause: string[];
  dwellingStyle: string[];
  parking: string[];
  parkingType: string[];
  dwellingType: string[];

  constructor(
    private route: Router){
    this.contacDto = new ContacDTO();
    this.propertyType = [];
    this.reportType = [];
    this.purposeType = [];
    this.purchase = [];
    this.newConstruction = [];
    this.refinance = [];
    this.relocation = [];
    this.modelHause = [];
    this.dwellingStyle = [];
    this.parking = [];
    this.parkingType = [];
    this.dwellingType = [];
  }

  ngOnInit(): void {
      this.uploadPropertyType();
      this.uploadDwellingStyle();
      this.uploadDwellingType();
      this.uploadPurposeType();
      this.uploadReportType();
      this.uploadNewConstruction();
      this.uploadRefinance();
      this.uploadRelocation();
  }

  public sendForm(): void {
    const payload = {
      contacDto: this.contacDto,
    };
  
    emailjs.send('service_80v805a', 'template_o493cvx', payload, 'EXTD0KsKrLZm8oxMz')
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Form sent',
          timer: 3000,
          text: 'Your form has been sent successfully.',
          confirmButtonText: 'Accept'
        });

        setTimeout(() => {
          this.route.navigate(['/'])
        }, 3000)
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar',
          text: 'Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.',
          footer: `<small>Error: ${(error as EmailJSResponseStatus).text}</small>`,
          confirmButtonText: 'Aceptar'
        });
      });
  }
  
  private uploadPropertyType() {
    this.propertyType = [
      "Residential", 
      "Commercial", 
    ];
  }

  private uploadReportType() {
    this.reportType = [
      "Full Appraisal",
      "Full Appraisal With Market Rent",
      "Market Rent",
      "Cancelled Appraisal - Report Written",
      "Capital Gains",
      "Drive By",
      "Desktop Appraisal",
      "Progress Report",
      "Completion Certificate",
      "Replacement cost",
      "Consulting Request",
      "Other"
    ];
  }

  private uploadPurposeType(){
    this.purposeType = [
      "Purchase",
      "Refinance",
      "Capital Gains",
      "Divorce",
      "Pre-List / Pre-Sale",
      "Relocation",
      "Estate Settlement With Buyout",
      "Estate Settlement Tittle Tranfer",
      "Probate",
      "Tittle Transfer",
      "Power Of Sale Or Foreclosure",
      "Consumer proposal",
      "Hst Rebate - Canada Revenue",
      "Prenups",
      "Update",
      "Internal Asset Management",
      "Assist marketing subject property",
      "Other"
    ],

    this.purchase = [
      "MLS Sale",
      "Private Sale",
      "New Construction"
    ]
  }

  private uploadNewConstruction() {
    this.newConstruction = [
      "Mattamy",
      "Caivan",
      "Minto",
      "Richcraft",
      "Urbandale",
      "Valecraft",
      "Laridge",
      "Other"
    ],

    this.modelHause = [
      "As If",
      "As If Completed",
      "Variation for new construction"
    ]
  }

  private uploadRefinance(){
    this.refinance = [
      "1st Mortgage",
      "2nd Mortgage"
    ]; 
  }  

  private uploadRelocation() {
    this.relocation = [
      "BGRS",
      "OPG",
      "WICHERT",
      "TRANSFEREASE",
      "RCMP",
      "Other"
    ]
  }

  private uploadDwellingStyle() {
    this.dwellingStyle = [
      "Detached",
      "Row Unit",
      "Semi Datached",
      "Apartament",
      "Condominium"
    ],
    
    this.parking = [
      "Yes",
      "No"
    ],

    this.parkingType = [
      "Surface",
      "Covered",
      "Underground"
    ]
    
  }

  private uploadDwellingType() {
    this.dwellingType = [
      "1 ½ Storey",
      "2 Storey",
      "3 Storey",
      "Fourplex",
      "Bungalow (1 Storey)",
      "Bungalow With Loft",
      "Double",
      "Duplex / Secundary Dwelling Unit / In-Law Suite",
      "Hi ranch",
      "Mobile",
      "Modular",
      "One Level",
      "Split Level",
      "Triplex",
      "Other"
    ]
  }

}
