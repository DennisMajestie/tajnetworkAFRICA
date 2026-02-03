import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionConfig } from '../../../core/models/types';
import { HeroBlockComponent } from '../hero-block/hero-block.component';
import { DynamicGridComponent } from '../dynamic-grid/dynamic-grid.component';
import { CtaBlockComponent } from '../cta-block/cta-block.component';
import { FormBlockComponent } from '../form-block/form-block.component';
import { TestimonialBlockComponent } from '../testimonial-block/testimonial-block.component';
import { TechSliderComponent } from '../tech-slider/tech-slider.component';
import { ServicesGridComponent } from '../services-grid/services-grid.component';
import { PortfolioShowcaseComponent } from '../portfolio-showcase/portfolio-showcase.component';
import { CtaBannerComponent } from '../cta-banner/cta-banner.component';
import { AboutHistoryComponent } from '../about-history/about-history.component';
import { AboutValuesComponent } from '../about-values/about-values.component';
import { AboutStatsComponent } from '../about-stats/about-stats.component';
import { AboutFounderComponent } from '../about-founder/about-founder.component';
import { TeamSectionComponent } from '../team-section/team-section.component';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { HomeAboutSectionComponent } from '../home-about-section/home-about-section.component';
import { ContentService } from '../../../core/services/content.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, HeroBlockComponent, DynamicGridComponent, CtaBlockComponent, FormBlockComponent, TestimonialBlockComponent, TechSliderComponent, ServicesGridComponent, PortfolioShowcaseComponent, CtaBannerComponent, AboutHistoryComponent, AboutValuesComponent, AboutStatsComponent, AboutFounderComponent, TeamSectionComponent, WhyChooseUsComponent, HomeAboutSectionComponent],
  template: `
    <section [id]="section.id" 
             [class]="'section section--' + section.type"
             [ngClass]="section.styling?.['customClass']"
             [style.background]="section.styling?.['backgroundColor']"
             [style.padding]="section.styling?.['padding']">
      
      <div class="section-motion-reveal">
        <ng-container [ngSwitch]="section.type">
          <app-hero-block *ngSwitchCase="'hero'" 
                         [data]="$any(section.data)" 
                         [animation]="section.animation ?? true">
          </app-hero-block>

          <app-tech-slider *ngSwitchCase="'tech-slider'">
          </app-tech-slider>

          <app-dynamic-grid *ngSwitchCase="'grid'" 
                           [data]="$any(section.data)">
          </app-dynamic-grid>

          <app-cta-block *ngSwitchCase="'cta'" 
                        [data]="section.data">
          </app-cta-block>

          <app-form-block *ngSwitchCase="'form'" 
                         [data]="$any(section.data)">
          </app-form-block>

          <app-testimonial-block *ngSwitchCase="'testimonial'" 
                                [data]="section.data">
          </app-testimonial-block>

          <app-services-grid *ngSwitchCase="'services'"
                             [tag]="section.data['tag']"
                             [title]="section.data['title']"
                             [subtitle]="section.data['subtitle']"
                             [limit]="section.data['limit']"
                             [services]="servicesData">
          </app-services-grid>

          <app-portfolio-showcase *ngSwitchCase="'portfolio'"
                                  [tag]="section.data['tag']"
                                  [title]="section.data['title']"
                                  [subtitle]="section.data['subtitle']"
                                  [limit]="section.data['limit'] || 6">
          </app-portfolio-showcase>

          <app-about-history *ngSwitchCase="'about-history'">
          </app-about-history>

          <app-about-values *ngSwitchCase="'about-values'">
          </app-about-values>

          <app-about-stats *ngSwitchCase="'about-stats'">
          </app-about-stats>

          <app-about-founder *ngSwitchCase="'about-founder'">
          </app-about-founder>

          <app-team-section *ngSwitchCase="'team'">
          </app-team-section>

          <app-why-choose-us *ngSwitchCase="'why-choose-us'">
          </app-why-choose-us>

          <app-home-about-section *ngSwitchCase="'home-about'">
          </app-home-about-section>

          <app-cta-banner *ngSwitchCase="'cta-banner'"
                          [title]="section.data['title']"
                          [subtitle]="section.data['subtitle']"
                          [primaryText]="section.data['primaryText']"
                          [primaryLink]="section.data['primaryLink']"
                          [secondaryText]="section.data['secondaryText']"
                          [secondaryLink]="section.data['secondaryLink']">
          </app-cta-banner>
        </ng-container>
      </div>
    </section>
  `,
  styles: [`
    // :host-context(.theme-light) .section:not(.section--hero) { 
    //   padding: 100px 0;
    //   background: var(--bg-light-gradient);
    // }
    .section { width: 100%; position: relative; }
    .section-motion-reveal { width: 100%; }
  `]

})
export class DynamicSectionComponent implements OnInit, AfterViewInit {
  @Input() section!: SectionConfig;
  servicesData: any[] = [];

  constructor(private el: ElementRef, private contentService: ContentService) { }

  ngOnInit(): void {
    if (this.section.styling) {
      this.applyStyling(this.section.styling);
    }

    // Load services data if this is a services section
    if (this.section.type === 'services') {
      this.contentService.getContent('services').subscribe(services => {
        this.servicesData = services || [];
      });
    }
  }

  ngAfterViewInit(): void {
    // Reveal animations are now handled globally by ScrollAnimationService
    // to prevent redundancy and improve performance.
  }


  private applyStyling(styles: any): void {
    // Custom logic for setting CSS variables if needed
  }
}
