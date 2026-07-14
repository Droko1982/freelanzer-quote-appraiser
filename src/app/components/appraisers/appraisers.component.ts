import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { LanguageService, Lang } from '../../services/language.service';

const LEAD_EMAIL = 'info@appraisalcanada.ca';
const LEAD_CC = 'morisee@hotmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

interface AppDto {
  firstName: string; lastName: string; email: string; phone: string;
  company: string; designation: string; licence: string; province: string;
  regions: string; specialties: string; experience: string; website: string; message: string;
}

@Component({
  selector: 'app-appraisers',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './appraisers.component.html',
  styleUrl: './appraisers.component.css'
})
export class AppraisersComponent {
  public L = inject(LanguageService);
  private http = inject(HttpClient);
  private titleSvc = inject(Title);
  private meta = inject(Meta);

  sending = false;
  dto: AppDto = this.blank();

  readonly designations = ['AACI', 'CRA', 'Candidate Member', 'P.App / Other'];
  readonly provinces = ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island', 'Territories'];

  constructor() {
    effect(() => {
      const t = this.c();
      this.titleSvc.setTitle(t.metaTitle);
      this.meta.updateTag({ name: 'description', content: t.metaDesc });
    });
  }

  private blank(): AppDto {
    return { firstName: '', lastName: '', email: '', phone: '', company: '', designation: '', licence: '', province: '', regions: '', specialties: '', experience: '', website: '', message: '' };
  }

  private l(): Lang { return this.L.lang(); }
  c() { return CONTENT[this.l()] ?? CONTENT.en; }

  submit(event: Event): void {
    event.preventDefault();
    if (this.sending) { return; }
    this.sending = true;
    const t = this.c();
    const payload: Record<string, string> = {
      _subject: 'New Appraiser Application — Appraisal Canada',
      _template: 'table',
      _captcha: 'false',
      _cc: LEAD_CC,
      Source: 'Appraiser network application — appraisalcanada.ca',
      'First Name': this.dto.firstName,
      'Last Name': this.dto.lastName,
      Email: this.dto.email,
      Phone: this.dto.phone,
      'Company / Firm': this.dto.company,
      'AIC Designation': this.dto.designation,
      'Licence / Registration No.': this.dto.licence,
      Province: this.dto.province,
      'Regions / cities served': this.dto.regions,
      Specialties: this.dto.specialties,
      'Years of experience': this.dto.experience,
      Website: this.dto.website,
      Message: this.dto.message,
    };
    this.http.post(FORMSUBMIT_ENDPOINT, payload, {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    }).subscribe({
      next: () => {
        this.sending = false;
        Swal.fire({ icon: 'success', title: `<h3 style="color:#4CAF50;">${t.okTitle}</h3>`, html: `<p style="color:#555;">${t.okBody}</p>`, confirmButtonText: t.okBtn, confirmButtonColor: '#4CAF50', timer: 7000, timerProgressBar: true });
        this.dto = this.blank();
      },
      error: () => {
        this.sending = false;
        Swal.fire({ icon: 'error', title: `<h3 style="color:#E74C3C;">${t.errTitle}</h3>`, html: `<p style="color:#555;">${t.errBody}</p>`, confirmButtonText: t.errBtn, confirmButtonColor: '#E74C3C' });
      }
    });
  }
}

interface Content {
  metaTitle: string; metaDesc: string;
  heroTitle: string; heroSub: string; heroCta: string;
  benefitsTitle: string; benefits: string[];
  howTitle: string; steps: { h: string; d: string }[];
  feeTitle: string; feeText: string;
  formTitle: string; formIntro: string; reqNote: string;
  f_first: string; f_last: string; f_email: string; f_phone: string; f_company: string;
  f_designation: string; f_designation_ph: string; f_licence: string; f_province: string; f_province_ph: string;
  f_regions: string; f_specialties: string; f_experience: string; f_website: string; f_message: string; f_select: string;
  submit: string;
  okTitle: string; okBody: string; okBtn: string; errTitle: string; errBody: string; errBtn: string;
}

const CONTENT: Record<Lang, Content> = {
  en: {
    metaTitle: 'Join Our Appraiser Network — Get Appraisal Jobs | Appraisal Canada',
    metaDesc: 'Are you an AIC-designated (AACI/CRA) or licensed appraiser in Canada? Join the Appraisal Canada network and receive new appraisal jobs in your area. Apply free — pay only per completed job.',
    heroTitle: 'Join Our Appraiser Network',
    heroSub: 'Are you an AIC-designated or licensed appraiser? Focus on your reports — we bring you new clients across Canada.',
    heroCta: 'Apply to join',
    benefitsTitle: 'Why join Appraisal Canada',
    benefits: [
      'New clients and jobs — no marketing needed',
      'Work in your own region and specialty',
      'Keep your independence and your brand',
      'We handle client acquisition and the first contact',
      'No upfront cost — pay only when you get paid',
    ],
    howTitle: 'How it works',
    steps: [
      { h: '1. Apply', d: 'Submit the form below with your credentials and coverage area.' },
      { h: '2. We verify', d: 'We confirm your AIC designation / licence to keep our network trusted.' },
      { h: '3. Get matched', d: 'When a client needs an appraisal in your area and specialty, we send it to you.' },
    ],
    feeTitle: 'Simple, fair terms',
    feeText: 'A 10% referral fee applies per completed job — no upfront cost and no monthly fees. You only pay when you get paid.',
    formTitle: 'Apply to the network',
    formIntro: 'Open to licensed and AIC-designated (AACI / CRA / Candidate) appraisers in Canada.',
    reqNote: 'Fields marked * are required. We verify credentials before assigning any work.',
    f_first: 'First Name', f_last: 'Last Name', f_email: 'Email', f_phone: 'Phone', f_company: 'Company / Firm',
    f_designation: 'AIC Designation', f_designation_ph: 'Select your designation', f_licence: 'Licence / Registration No.',
    f_province: 'Province', f_province_ph: 'Select your province', f_regions: 'Regions / cities you cover',
    f_specialties: 'Specialties (residential, commercial, equipment…)', f_experience: 'Years of experience',
    f_website: 'Website (optional)', f_message: 'Anything else (optional)', f_select: 'Select',
    submit: 'Submit application',
    okTitle: 'Application received!', okBody: 'Thank you. We will review your credentials and get back to you shortly.', okBtn: 'Okay',
    errTitle: 'Error sending application', errBody: 'There was a problem. Please try again or email info@appraisalcanada.ca.', errBtn: 'Retry',
  },
  fr: {
    metaTitle: 'Rejoignez notre réseau d’évaluateurs | Appraisal Canada',
    metaDesc: 'Vous êtes évaluateur désigné AIC (AACI/CRA) ou agréé au Canada? Rejoignez le réseau Appraisal Canada et recevez des mandats dans votre région. Inscription gratuite — vous ne payez que par mandat réalisé.',
    heroTitle: 'Rejoignez notre réseau d’évaluateurs',
    heroSub: 'Vous êtes évaluateur désigné AIC ou agréé? Concentrez-vous sur vos rapports — nous vous amenons de nouveaux clients partout au Canada.',
    heroCta: 'Poser ma candidature',
    benefitsTitle: 'Pourquoi vous joindre à Appraisal Canada',
    benefits: [
      'De nouveaux clients et mandats — sans marketing',
      'Travaillez dans votre région et votre spécialité',
      'Gardez votre indépendance et votre marque',
      'Nous gérons l’acquisition de clients et le premier contact',
      'Aucun coût initial — vous payez seulement quand vous êtes payé',
    ],
    howTitle: 'Comment ça fonctionne',
    steps: [
      { h: '1. Postulez', d: 'Remplissez le formulaire ci-dessous avec vos qualifications et votre zone.' },
      { h: '2. Vérification', d: 'Nous confirmons votre désignation AIC / permis pour garder un réseau de confiance.' },
      { h: '3. Jumelage', d: 'Quand un client a besoin d’une évaluation dans votre région et spécialité, nous vous l’envoyons.' },
    ],
    feeTitle: 'Des conditions simples et justes',
    feeText: 'Des frais de référence de 10 % s’appliquent par mandat réalisé — aucun coût initial ni frais mensuels. Vous payez uniquement quand vous êtes payé.',
    formTitle: 'Postuler au réseau',
    formIntro: 'Ouvert aux évaluateurs agréés et désignés AIC (AACI / CRA / Candidat) au Canada.',
    reqNote: 'Les champs marqués * sont obligatoires. Nous vérifions les qualifications avant d’attribuer un mandat.',
    f_first: 'Prénom', f_last: 'Nom', f_email: 'Courriel', f_phone: 'Téléphone', f_company: 'Entreprise / Firme',
    f_designation: 'Désignation AIC', f_designation_ph: 'Choisissez votre désignation', f_licence: 'N° de permis / d’inscription',
    f_province: 'Province', f_province_ph: 'Choisissez votre province', f_regions: 'Régions / villes couvertes',
    f_specialties: 'Spécialités (résidentiel, commercial, équipement…)', f_experience: 'Années d’expérience',
    f_website: 'Site web (facultatif)', f_message: 'Autre information (facultatif)', f_select: 'Choisir',
    submit: 'Envoyer ma candidature',
    okTitle: 'Candidature reçue!', okBody: 'Merci. Nous examinerons vos qualifications et vous reviendrons sous peu.', okBtn: 'D’accord',
    errTitle: 'Erreur d’envoi', errBody: 'Un problème est survenu. Réessayez ou écrivez à info@appraisalcanada.ca.', errBtn: 'Réessayer',
  },
  es: {
    metaTitle: 'Únete a nuestra red de tasadores | Appraisal Canada',
    metaDesc: '¿Eres tasador designado AIC (AACI/CRA) o licenciado en Canadá? Únete a la red de Appraisal Canada y recibe trabajos de evalúo en tu zona. Inscripción gratis — solo pagas por trabajo realizado.',
    heroTitle: 'Únete a nuestra red de tasadores',
    heroSub: '¿Eres tasador designado AIC o licenciado? Concéntrate en tus informes — nosotros te traemos nuevos clientes en todo Canadá.',
    heroCta: 'Postularme',
    benefitsTitle: 'Por qué unirte a Appraisal Canada',
    benefits: [
      'Nuevos clientes y trabajos — sin hacer marketing',
      'Trabaja en tu región y especialidad',
      'Conserva tu independencia y tu marca',
      'Nosotros conseguimos los clientes y el primer contacto',
      'Sin costo inicial — solo pagas cuando te pagan',
    ],
    howTitle: 'Cómo funciona',
    steps: [
      { h: '1. Postúlate', d: 'Llena el formulario de abajo con tus credenciales y zona de cobertura.' },
      { h: '2. Verificamos', d: 'Confirmamos tu designación AIC / licencia para mantener una red confiable.' },
      { h: '3. Te asignamos', d: 'Cuando un cliente necesita un evalúo en tu zona y especialidad, te lo enviamos.' },
    ],
    feeTitle: 'Condiciones simples y justas',
    feeText: 'Se aplica una comisión de referido del 10 % por trabajo realizado — sin costo inicial ni cuotas mensuales. Solo pagas cuando te pagan.',
    formTitle: 'Postúlate a la red',
    formIntro: 'Abierto a tasadores licenciados y designados AIC (AACI / CRA / Candidato) en Canadá.',
    reqNote: 'Los campos con * son obligatorios. Verificamos las credenciales antes de asignar cualquier trabajo.',
    f_first: 'Nombre', f_last: 'Apellido', f_email: 'Correo', f_phone: 'Teléfono', f_company: 'Empresa / Firma',
    f_designation: 'Designación AIC', f_designation_ph: 'Elige tu designación', f_licence: 'N° de licencia / registro',
    f_province: 'Provincia', f_province_ph: 'Elige tu provincia', f_regions: 'Regiones / ciudades que cubres',
    f_specialties: 'Especialidades (residencial, comercial, equipo…)', f_experience: 'Años de experiencia',
    f_website: 'Sitio web (opcional)', f_message: 'Algo más (opcional)', f_select: 'Elegir',
    submit: 'Enviar postulación',
    okTitle: '¡Postulación recibida!', okBody: 'Gracias. Revisaremos tus credenciales y te contactaremos pronto.', okBtn: 'De acuerdo',
    errTitle: 'Error al enviar', errBody: 'Hubo un problema. Inténtalo de nuevo o escribe a info@appraisalcanada.ca.', errBtn: 'Reintentar',
  },
};
