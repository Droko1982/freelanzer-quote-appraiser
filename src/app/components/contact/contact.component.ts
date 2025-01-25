import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContacDTO } from '../../dto/contac-dto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NgIf, NgFor, FormsModule, CommonModule]
})
export class ContactComponent implements OnInit {

  contacDto: ContacDTO = new ContacDTO();
  propertyType: string[];
  reportType: string[];
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
  isRetrospectiveAppraisal: string[];

  constructor(
    private route: Router) {
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
    this.isRetrospectiveAppraisal = [];
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
    this.uploadIsRetrospectiveAppraisal();
  }

  public sendEmail(event: Event): void {

    const templateParams = {
      firstName: this.contacDto.firstName,
      lastName: this.contacDto.lastName,
      emailAddress: this.contacDto.emailAddress,
      phoneNumber: this.contacDto.phoneNumber,
      address: this.contacDto.address,
      reportType: this.contacDto.reportType,
      otherReport: this.contacDto.otherReport,
      propertyType: this.contacDto.propertyType,
      purposeType: this.contacDto.purposeType,
      otherPurpose: this.contacDto.otherPurpose,
      dwellingStyleType: this.contacDto.dwellingStyleType,
      dwellingType: this.contacDto.dwellingType,
      otherDwellingType: this.contacDto.otherDwellingType,
      additionalInfo: this.contacDto.additionalInfo,
      purchaseType: this.contacDto.purchaseType,
      constructionCompany: this.contacDto.constructionCompany,
      otherConstructionCompany: this.contacDto.otherConstructionCompany,
      houseModel: this.contacDto.houseModel,
      purchasePrice: this.contacDto.purchasePrice,
      mortgageType: this.contacDto.mortgageType,
      lender: this.contacDto.lender,
      refinanceAmount: this.contacDto.refinanceAmount,
      loanToValue: this.contacDto.loanToValue,
      relocationType: this.contacDto.relocationType,
      otherRelocationType: this.contacDto.otherRelocationType,
      referenceNumber: this.contacDto.referenceNumber,
      condoFees: this.contacDto.condoFees,
      parking: this.contacDto.parking,
      parkingType: this.contacDto.parkingType,
      parkingSpaces: this.contacDto.parkingSpaces,
      locker: this.contacDto.locker,
      specialAssessments: this.contacDto.specialAssessments,
      isRetrospectiveAppraisal: this.contacDto.isRetrospectiveAppraisal,
      retrospectiveAppraisalDate: this.contacDto.retrospectiveAppraisalDate,
    };

    emailjs.send('service_rikywrb', 'template_qqmr6lx', templateParams, '2z8UW16Wu-y-K_V_T')
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: '<h3 style="color: #4CAF50;">Form Submitted Successfully!</h3>',
          html: `
          <p style="color: #555;">Your form has been sent successfully. We will contact you shortly.</p>
          <p style="font-size: 0.9rem; color: #888;">Thank you for reaching out!</p>
        `,
          confirmButtonText: 'Okay',
          confirmButtonColor: '#4CAF50',
          background: '#f9f9f9',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title',
            htmlContainer: 'swal-custom-html',
          },
          timer: 5000,
          timerProgressBar: true,
        });
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: '<h3 style="color: #E74C3C;">Error Sending Form</h3>',
          html: `
          <p style="color: #555;">There was a problem submitting your form. Please try again later.</p>
          <p style="font-size: 0.9rem; color: #888;">If the issue persists, contact our support team.</p>
        `,
          confirmButtonText: 'Retry',
          confirmButtonColor: '#E74C3C',
          background: '#f9f9f9',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title',
            htmlContainer: 'swal-custom-html',
          },
        });
        console.error('FAILED...', err);
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

  private uploadPurposeType() {
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

  private uploadRefinance() {
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

  private uploadIsRetrospectiveAppraisal() {
    this.isRetrospectiveAppraisal = [
      "Yes",
      "No"
    ]
  }

}
