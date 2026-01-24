import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutHeroComponent } from '../../shared/components/about-hero/about-hero.component';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';
import { AboutStatsComponent } from '../../shared/components/about-stats/about-stats.component';
import { AboutHistoryComponent } from '../../shared/components/about-history/about-history.component';
import { AboutValuesComponent } from '../../shared/components/about-values/about-values.component';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';
import { ContactMapComponent } from '../../shared/components/contact-map/contact-map.component';
import { ContactFormSectionComponent } from '../../shared/components/contact-form-section/contact-form-section.component';
import { TeamSectionComponent } from '../../shared/components/team-section/team-section.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        AboutHeroComponent,
        ServicesIntroComponent,
        AboutStatsComponent,
        AboutHistoryComponent,
        AboutValuesComponent,
        TeamSectionComponent,
        ContactInfoComponent,
        ContactMapComponent,
        ContactFormSectionComponent,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
    introImage = "assets/images/taj/homeslider/slider2.jpg";

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
}
