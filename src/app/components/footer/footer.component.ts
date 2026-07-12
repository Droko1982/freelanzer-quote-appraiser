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

  // TODO: replace with the new business line once it is active.
  readonly phoneDisplay = '+1 (000) 000-0000';
  readonly phoneTel = '';                       // e.g. '+15551234567'
  readonly whatsapp = '';                        // e.g. '15551234567'
  readonly email = 'morisee@hotmail.com';
  readonly year = 2026;
}
