import { Component, OnInit, AfterViewInit, inject, PendingTasks } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridComponent } from '../../shared/components/services-grid/services-grid.component';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';
import { ServicesCtaComponent } from '../../shared/components/services-cta/services-cta.component';
import { BlogDataService } from '../../services/blog-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ServicesGridComponent,
    ServicesIntroComponent,
    ServicesCtaComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  bgImage = "assets/images/taj/homeslider/slider5.jpg";
  introImage = "assets/images/taj/homeslider/slider3.jpg";

  services: any;
  private pendingTasks = inject(PendingTasks);
  private removeTask?: () => void;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    // Add a pending task to lock hydration until we're ready
    this.removeTask = this.pendingTasks.add();

    window.scrollTo(0, 0);
    this.services = this.blogDataService.getServices();
  }

  ngAfterViewInit(): void {
    // Release the hydration lock after a micro-delay to allow for paint
    setTimeout(() => {
      if (this.removeTask) {
        this.removeTask();
        this.removeTask = undefined;
      }
    }, 100);
  }
}

