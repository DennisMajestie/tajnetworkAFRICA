import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutHeroComponent } from '../../shared/components/about-hero/about-hero.component';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';
import { AboutHistoryComponent } from '../../shared/components/about-history/about-history.component';
import { AboutFounderComponent } from '../../shared/components/about-founder/about-founder.component';
import { TeamSectionComponent } from '../../shared/components/team-section/team-section.component';
import { ContactInfoComponent } from '../../shared/components/contact-info/contact-info.component';
import { ContactMapComponent } from '../../shared/components/contact-map/contact-map.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        AboutHeroComponent,
        ServicesIntroComponent,
        AboutHistoryComponent,
        AboutFounderComponent,
        TeamSectionComponent,
        ContactInfoComponent,
        ContactMapComponent,
    ],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    introImage = "assets/images/taj/taj-team/taj-bg.jpg";

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
}
