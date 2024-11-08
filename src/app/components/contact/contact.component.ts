import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Correct import from @angular/forms
import { HttpClient } from '@angular/common/http';
import { ContacDTO } from '../../dto/contac-dto';

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
  dwellingStyle: string[];
  dwellingType: string[];

  constructor(){
    this.contacDto = new ContacDTO();
    this.propertyType = [];
    this.reportType = [];
    this.purposeType = [];
    this.purchase = [];
    this.newConstruction = [];
    this.dwellingStyle = [];
    this.dwellingType = [];
  }

  ngOnInit(): void {
      this.uploadPropertyType();
      this.uploadDwellingStyle();
      this.uploadDwellingType();
      this.uploadPurposeType();
      this.uploadReportType();
      this.uploadNewConstruction
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
    ]
  }

  private uploadDwellingStyle() {
    this.dwellingStyle = [
      "Detached",
      "Row Unit",
      "Semi Datached",
      "Apartament",
      "Condominium"
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
