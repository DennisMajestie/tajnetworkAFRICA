import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';
import { ContactMapComponent } from '../../shared/components/contact-map/contact-map.component';
import { ContactFormSectionComponent } from '../../shared/components/contact-form-section/contact-form-section.component';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactInfoComponent,
    ContactMapComponent,
    ContactFormSectionComponent,
    ServicesIntroComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
