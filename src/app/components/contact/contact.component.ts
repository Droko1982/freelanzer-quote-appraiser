import { Component, OnInit, inject } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContacDTO } from '../../dto/contac-dto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

/**
 * Where appraisal leads are delivered.
 * FormSubmit.co needs ONLY this email address — no account, no API keys.
 * First submission (or the one-time activation email FormSubmit sends here) turns it on;
 * after that every request lands in this inbox.
 * NOTE: Wieland & Associates' EmailJS integration was intentionally removed so no leads route to them.
 */
const LEAD_EMAIL = 'morisee@hotmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NgIf, NgFor, FormsModule, CommonModule]
})
export class ContactComponent implements OnInit {

  public L = inject(LanguageService);
  private http = inject(HttpClient);

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
  sending = false;

  constructor(private route: Router) {
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
    event.preventDefault();
    if (this.sending) { return; }
    this.sending = true;

    const payload: Record<string, string> = {
      _subject: 'New Appraisal Request — Freelanzer Quote & Appraiser',
      _template: 'table',
      _captcha: 'false',
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

    this.http.post(FORMSUBMIT_ENDPOINT, payload, {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    }).subscribe({
      next: () => {
        this.sending = false;
        Swal.fire({
          icon: 'success',
          title: `<h3 style="color: #4CAF50;">${this.L.t('ok_title')}</h3>`,
          html: `
          <p style="color: #555;">${this.L.t('ok_body')}</p>
          <p style="font-size: 0.9rem; color: #888;">${this.L.t('ok_thanks')}</p>
        `,
          confirmButtonText: this.L.t('ok_btn'),
          confirmButtonColor: '#4CAF50',
          background: '#f9f9f9',
          timer: 6000,
          timerProgressBar: true,
        });
        this.contacDto = new ContacDTO();
      },
      error: () => {
        this.sending = false;
        Swal.fire({
          icon: 'error',
          title: `<h3 style="color: #E74C3C;">${this.L.t('err_title')}</h3>`,
          html: `
          <p style="color: #555;">${this.L.t('err_body')}</p>
          <p style="font-size: 0.9rem; color: #888;">${this.L.t('err_help')}</p>
        `,
          confirmButtonText: this.L.t('err_btn'),
          confirmButtonColor: '#E74C3C',
          background: '#f9f9f9',
        });
      }
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
