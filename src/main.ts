import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
import { gsap } from 'gsap';

// Register Swiper custom elements globally
register();

// Silence GSAP null target warnings (intentional for removed elements)
gsap.config({ nullTargetWarn: false });

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
