import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public L = inject(LanguageService);

  // Business line (Ontario / GTA — 905).
  readonly phoneDisplay = '+1 (905) 367-6998';
  readonly phoneTel = '+19053676998';
  readonly whatsapp = '19053676998';             // requires WhatsApp Business registered on this line
  readonly email = 'morisee@hotmail.com';
  readonly year = 2026;
}
