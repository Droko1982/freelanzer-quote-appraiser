import { Component, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContacDTO } from '../../dto/contac-dto';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { CITY_BY_SLUG } from '../../data/cities';

/**
 * Where appraisal leads are delivered.
 * FormSubmit.co needs ONLY this email address — no account, no API keys.
 * First submission (or the one-time activation email FormSubmit sends here) turns it on;
 * after that every request lands in this inbox.
 * NOTE: Wieland & Associates' EmailJS integration was intentionally removed so no leads route to them.
 */
/** What the FormSubmit AJAX endpoint returns. It answers 200 even on refusal. */
interface FormSubmitResponse { success?: string; message?: string; }

const LEAD_EMAIL = 'info@appraisalcanada.ca';
const LEAD_CC = 'morisee@hotmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule]
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

  private activated = inject(ActivatedRoute);

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
    // Arriving from a city landing page (/contact?city=toronto) pre-fills the city,
    // so visitors coming from a local page or ad have one less field to type.
    const slug = this.activated.snapshot.queryParamMap.get('city');
    if (slug && CITY_BY_SLUG[slug]) {
      this.contacDto.city = CITY_BY_SLUG[slug].name;
    }
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
      // The warning names no field, and on a form this long the offending one is
      // usually off-screen — the visitor was left staring at the Send button with
      // nothing to act on. Put them on the first field that needs an answer.
      }).then(() => this.focusFirstInvalid(form));
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
      'City / Town': this.contacDto.city,
      'Report Type': this.contacDto.reportType,
      'Report Type (other)': this.contacDto.otherReport,
      'Property Type': this.contacDto.propertyType,
      Purpose: this.contacDto.purposeType,
      'Purpose (other)': this.contacDto.otherPurpose,
      'Dwelling Style': this.contacDto.dwellingStyleType,
      'Dwelling Type': this.contacDto.dwellingType,
      'Dwelling Type (other)': this.contacDto.otherDwellingType,

      // Purchase branch
      'Purchase Type': this.contacDto.purchaseType,
      'Construction Company': this.contacDto.constructionCompany,
      'Construction Company (other)': this.contacDto.otherConstructionCompany,
      'House Model': this.contacDto.houseModel,
      'Purchase Price': this.contacDto.purchasePrice,

      // Refinance branch
      'Mortgage Type': this.contacDto.mortgageType,
      Lender: this.contacDto.lender,
      'Refinance Amount': this.contacDto.refinanceAmount,
      'Loan-to-Value': this.contacDto.loanToValue,

      // Relocation branch
      'Relocation Type': this.contacDto.relocationType,
      'Relocation Type (other)': this.contacDto.otherRelocationType,
      'Reference Number': this.contacDto.referenceNumber,

      // Condominium branch
      'Condo Fees': this.contacDto.condoFees,
      Parking: this.contacDto.parking,
      'Parking Type': this.contacDto.parkingType,
      'Parking Spaces': this.contacDto.parkingSpaces,
      Locker: this.contacDto.locker,
      'Special Assessments': this.contacDto.specialAssessments,

      'Retrospective Appraisal': this.contacDto.isRetrospectiveAppraisal,
      'Retrospective Date': this.contacDto.retrospectiveAppraisalDate,
      'Additional Information': this.contacDto.additionalInfo,
    };

    // Each lead only sees the branches that apply to it, so most of the keys
    // above are blank. Drop them so the lead email lists just the questions
    // this client was actually asked. Keys starting with "_" are FormSubmit
    // directives and must always be sent.
    for (const key of Object.keys(payload)) {
      if (!key.startsWith('_') && !String(payload[key] ?? '').trim()) {
        delete payload[key];
      }
    }

    this.http.post<FormSubmitResponse>(FORMSUBMIT_ENDPOINT, payload, {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    }).subscribe({
      next: (res) => {
        // FormSubmit answers 200 even when it refuses a submission — most often
        // while the recipient address is not activated, or when it rate-limits.
        // Treating any 200 as delivered told the visitor their request was sent,
        // wiped the form, and counted a GA4 conversion for a lead that never
        // arrived, which also hid the outage. Check what it actually said.
        if (String(res?.success) !== 'true') {
          console.error('FormSubmit rejected the submission', res);
          this.sending = false;
          this.showFailure();
          return;
        }
        this.sending = false;
        window.gtag?.('event', 'generate_lead', { method: 'quote_form' });
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
        // resetForm() clears the values AND the dirty/touched/submitted flags.
        // Blanking the model alone left every control still marked invalid, so
        // the emptied form lit up red behind the success dialog and read as a
        // rejection.
        this.contacDto = new ContacDTO();
        form.resetForm();
      },
      error: (err) => {
        console.error('FormSubmit request failed', err);
        this.sending = false;
        this.showFailure();
      }
    });
  }

  /** Scrolls to and focuses the first control that failed validation. */
  private focusFirstInvalid(form: NgForm): void {
    const name = Object.keys(form.controls).find(k => form.controls[k].invalid);
    if (!name) { return; }
    const el = document.querySelector<HTMLElement>(`[name="${name}"]`);
    if (!el) { return; }
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.focus({ preventScroll: true });
  }

  /**
   * Shown whenever the lead did not get through. Includes the phone and
   * WhatsApp numbers so a failed submit still ends in a way to reach us.
   */
  private showFailure(): void {
    Swal.fire({
      icon: 'error',
      title: `<h3 style="color: #E74C3C;">${this.L.t('err_title')}</h3>`,
      html: `
          <p style="color: #555;">${this.L.t('err_body')}</p>
          <p style="font-size: 0.9rem; color: #888;">${this.L.t('err_help')}</p>
          <p style="font-size: 0.95rem; margin-top: 14px;">
            <a href="tel:+19053676998" style="color:#0f3460;font-weight:700;">+1 (905) 367-6998</a>
            &nbsp;·&nbsp;
            <a href="${this.L.whatsappUrl()}" target="_blank" rel="noopener" style="color:#17803e;font-weight:700;">WhatsApp</a>
            &nbsp;·&nbsp;
            <a href="mailto:${LEAD_EMAIL}" style="color:#0f3460;font-weight:700;">${LEAD_EMAIL}</a>
          </p>
        `,
      confirmButtonText: this.L.t('err_btn'),
      confirmButtonColor: '#E74C3C',
      background: '#f9f9f9',
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
      "Drive-By",
      "Desktop Appraisal",
      "Progress Report",
      "Completion Certificate",
      "Replacement Cost",
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
      "Assist Marketing Subject Property",
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
      "Claridge",
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
