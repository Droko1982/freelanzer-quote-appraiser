import { Component, OnInit, inject, effect } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContacDTO } from '../../dto/contac-dto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

/**
 * Where appraisal leads are delivered.
 * FormSubmit.co needs ONLY this email address — no account, no API keys.
 * First submission (or the one-time activation email FormSubmit sends here) turns it on;
 * after that every request lands in this inbox.
 * NOTE: Wieland & Associates' EmailJS integration was intentionally removed so no leads route to them.
 */
const LEAD_EMAIL = 'info@appraisalcanada.ca';
const LEAD_CC = 'morisee@hotmail.com';
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
  private seo = inject(SeoService);

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
    effect(() => { this.L.lang(); this.seo.set('contact'); });
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

  public sendEmail(event: Event, form: NgForm): void {
    event.preventDefault();
    if (this.sending) { return; }
    if (form.invalid) {
      Object.values(form.controls).forEach(c => { c.markAsDirty(); c.markAsTouched(); });
      Swal.fire({
        icon: 'warning',
        title: this.L.t('val_title'),
        text: this.L.t('val_body'),
        confirmButtonText: this.L.t('ok_btn'),
        confirmButtonColor: '#0f3460',
      });
      return;
    }
    this.sending = true;

    const payload: Record<string, string> = {
      _subject: 'New Appraisal Request — Appraisal Canada',
      _template: 'table',
      _captcha: 'false',
      _cc: LEAD_CC,
      Source: 'Appraisal Canada — appraisalcanada.ca',
      'First Name': this.contacDto.firstName,
      'Last Name': this.contacDto.lastName,
      Phone: this.contacDto.phoneNumber,
      Email: this.contacDto.emailAddress,
      'Property Address': this.contacDto.address,
      'Report Type': this.contacDto.reportType,
      'Report Type (other)': this.contacDto.otherReport,
      'Property Type': this.contacDto.propertyType,
      Purpose: this.contacDto.purposeType,
      'Purpose (other)': this.contacDto.otherPurpose,
      'Dwelling Style': this.contacDto.dwellingStyleType,
      'Dwelling Type': this.contacDto.dwellingType,
      'Dwelling Type (other)': this.contacDto.otherDwellingType,
      'Special Assessments': this.contacDto.specialAssessments,
      'Retrospective Appraisal': this.contacDto.isRetrospectiveAppraisal,
      'Retrospective Date': this.contacDto.retrospectiveAppraisalDate,
      'Additional Information': this.contacDto.additionalInfo,
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
      "Land / Vacant Land",
      "Machinery / Equipment",
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
      "Estate Settlement Title Transfer",
      "Probate",
      "Title Transfer",
      "Power Of Sale Or Foreclosure",
      "Consumer Proposal",
      "HST Rebate - Canada Revenue",
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
      "Semi Detached",
      "Apartment",
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
      "Duplex / Secondary Dwelling Unit / In-Law Suite",
      "Hi-Ranch",
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
