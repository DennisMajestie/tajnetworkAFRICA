import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicSectionComponent } from '../../shared/components/dynamic-section/dynamic-section.component';
import { ConfigService } from '../../core/services/config.service';
import { PageConfig, SectionConfig } from '../../core/models/types';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionComponent],
  template: `
    <div class="loading-state" *ngIf="loading">
      <div class="loader"></div>
    </div>

    <!-- Page Not Found / Error UI -->
    <div class="status-page" *ngIf="error">
      <div class="status-bg">
        <div class="glow-orb"></div>
        <div class="grid-overlay"></div>
      </div>
      <div class="container--narrow">
        <div class="status-content">
          <div class="status-badge">Config Error</div>
          <h1 class="status-title">Sector <span class="highlight">Unreachable</span></h1>
          <p class="status-desc">{{ error }}</p>
          <div class="status-actions">
            <a href="/" class="btn-primary">Back to Home</a>
            <a href="/contact" class="btn-outline">Support Uplink</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wrapper" *ngIf="pageConfig && !error">
      <app-dynamic-section 
        *ngFor="let section of pageConfig.sections"
        [section]="section">
      </app-dynamic-section>
    </div>
  `,
  styles: [`
    .page-wrapper {
      width: 100%;
      overflow-x: hidden;
    }

    .loading-state {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loader {
      width: 50px;
      height: 50px;
      border: 3px solid rgba(0, 102, 255, 0.1);
      border-top-color: var(--color-accent-blue);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Status Page Styling (Matches NotFoundComponent) */
    .status-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: #020c18;
      overflow: hidden;
      color: #fff;
    }

    .status-bg {
      position: absolute; inset: 0; z-index: 0;
      .glow-orb {
        position: absolute; width: 600px; height: 600px;
        background: radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%);
        top: 50%; left: 50%; transform: translate(-50%, -50%); filter: blur(80px);
      }
      .grid-overlay {
        position: absolute; inset: 0;
        background-image: linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px);
        background-size: 50px 50px;
      }
    }

    .status-content { text-align: center; position: relative; z-index: 10; max-width: 600px; padding: 0 20px; }
    
    .status-badge {
      display: inline-block; padding: 8px 20px; background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 100px;
      color: #ef4444; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; margin-bottom: 30px;
    }

    .status-title {
      font-size: clamp(2.2rem, 8.5vw, 4.5rem); font-weight: 900; letter-spacing: -0.04em; line-height: 1; margin-bottom: 25px;
      .highlight { color: #ef4444; }
    }

    .status-desc { font-size: clamp(1rem, 4.5vw, 1.15rem); color: rgba(255, 255, 255, 0.5); line-height: 1.6; margin-bottom: 45px; }

    .status-actions { display: flex; justify-content: center; gap: 20px; }

    .btn-primary {
      padding: 18px 35px; background: #fff; color: #020c18; border-radius: 100px;
      font-weight: 900; text-decoration: none; text-transform: uppercase; font-size: 0.9rem;
      transition: all 0.4s ease;
      &:hover { background: var(--color-accent-blue); color: #fff; transform: translateY(-5px); }
    }

    .btn-outline {
      padding: 18px 35px; border: 1.5px solid rgba(255, 255, 255, 0.2); color: #fff;
      border-radius: 100px; font-weight: 900; text-decoration: none; text-transform: uppercase; font-size: 0.9rem;
      transition: all 0.4s ease;
      &:hover { border-color: #fff; background: rgba(255,255,255,0.05); }
    }

    /* Light Mode Overrides */
    :host-context(.theme-light) .status-page {
      background: #f8faff !important;
    }
    :host-context(.theme-light) .status-bg {
      .glow-orb { background: radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, transparent 70%); }
      .grid-overlay { background-image: linear-gradient(rgba(0, 74, 120, 0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(0, 74, 120, 0.03) 1px, transparent 1px); }
    }
    :host-context(.theme-light) .status-title { color: #0c152a !important; }
    :host-context(.theme-light) .status-desc { color: #475569 !important; }
    :host-context(.theme-light) .btn-primary { background: #004a78 !important; color: #fff !important; box-shadow: 0 10px 30px rgba(0, 74, 120, 0.15); }
    :host-context(.theme-light) .btn-outline { border-color: #cbd5e1 !important; color: #475569 !important; }
    :host-context(.theme-light) .btn-outline:hover { background: #f1f5f9; border-color: #004a78; color: #004a78; }
  `]
})
export class DynamicPageComponent implements OnInit {
  pageConfig: PageConfig | undefined;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    // Subscribe to route data (from resolver) or params
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || 'home';
      this.loadPage(slug);
    });
  }

  loadPage(slug: string): void {
    this.loading = true;
    this.error = null;
    this.configService.getPageConfig(slug).subscribe({
      next: (config) => {
        this.loading = false;
        if (config) {
          this.pageConfig = config;
          this.setMetaTags(config.meta);
        } else {
          this.error = `Page "${slug}" not found in configuration.`;
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = `Failed to load page config: ${err.message}`;
        console.error('Config load error:', err);
      }
    });
  }

  private setMetaTags(meta: any): void {
    if (meta) {
      document.title = meta.title || 'Taj Network Africa';
      // In a real app, use Meta service to set description, etc.
    }
  }
}
