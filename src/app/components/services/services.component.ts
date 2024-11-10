import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

  services: string[];

  constructor(private router: Router) {
    this.services = [];
  }

  ngOnInit(): void {
    this.uploadServices();
  }

  getAppraiser() {
    this.router.navigate(['/contact']);
  }

  private uploadServices() {
    this.services = [
    'Residential',
    'Consulting Services',
    'Commercial',
    'Mortgage Financing',
    'Relocations – Government and Employee',
    'Matrimonial / Separation of Assets',
    'New Construction',
    'Capital Gains',
    'Pre-list and Pre-sale Valuations',
    'Power of Sale / Foreclosure',
    'MPAC Assessment Tax Appeals',
    'Insurance / Replacement Cost Valuations',
    'Expropriation / Right-of-Way Acquisitions',
    'Wills and Estates'
    ]
  }
}
