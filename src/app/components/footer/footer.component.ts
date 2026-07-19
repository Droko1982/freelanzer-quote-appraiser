import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public L = inject(LanguageService);

  // Business line (Ontario / GTA — 905).
  readonly phoneDisplay = '+1 (905) 367-6998';
  readonly phoneTel = '+19053676998';
  readonly whatsapp = '19053676998';             // requires WhatsApp Business registered on this line
  readonly email = 'info@appraisalcanada.ca';
  readonly year = new Date().getFullYear();
}
