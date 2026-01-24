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
import { ContentService } from '../../../core/services/content.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, HeroBlockComponent, DynamicGridComponent, CtaBlockComponent, FormBlockComponent, TestimonialBlockComponent, TechSliderComponent, ServicesGridComponent, PortfolioShowcaseComponent, CtaBannerComponent],
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
                             [services]="servicesData">
          </app-services-grid>

          <app-portfolio-showcase *ngSwitchCase="'portfolio'"
                                  [tag]="section.data['tag']"
                                  [title]="section.data['title']"
                                  [subtitle]="section.data['subtitle']"
                                  [limit]="3">
          </app-portfolio-showcase>


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
    :host-context(.theme-light) { 
      padding: 100px 0;
      background: var(--bg-light-gradient) !important;
    }
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
    gsap.registerPlugin(ScrollTrigger);

    // Only animate if section doesn't have internal complex animations like hero
    if (this.section.type !== 'hero' && this.section.animation !== false) {
      const target = this.el.nativeElement.querySelector('.section-motion-reveal');
      if (target) {
        gsap.from(target, {
          opacity: 0,
          y: 50,
          scale: 0.98,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    }
  }

  private applyStyling(styles: any): void {
    // Custom logic for setting CSS variables if needed
  }
}
