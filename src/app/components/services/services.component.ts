import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  public L = inject(LanguageService);

  private servicesEn: string[] = [
    'Residential Appraisals',
    'Commercial Appraisals',
    'Consulting Services',
    'Mortgage Financing',
    'Relocations – Government and Employee',
    'Matrimonial / Separation of Assets',
    'New Construction',
    'Capital Gains',
    'Pre-list and Pre-sale Valuations',
    'Power of Sale / Foreclosure',
    'Property Tax Assessment Appeals',
    'Insurance / Replacement Cost Valuations',
    'Expropriation / Right-of-Way Acquisitions',
    'Wills and Estates',
  ];

  private servicesFr: string[] = [
    'Évaluations résidentielles',
    'Évaluations commerciales',
    'Services de consultation',
    'Financement hypothécaire',
    'Réinstallations – gouvernement et employés',
    'Matrimonial / séparation des biens',
    'Construction neuve',
    'Gains en capital',
    'Évaluations avant mise en vente',
    'Vente sous seing / saisie',
    'Contestations d’évaluation foncière',
    'Assurance / coût de remplacement',
    'Expropriation / acquisitions d’emprise',
    'Testaments et successions',
  ];

  constructor(private router: Router) {}

  get services(): string[] {
    return this.L.lang() === 'fr' ? this.servicesFr : this.servicesEn;
  }

  getAppraiser() {
    this.router.navigate(['/contact']);
  }
}
