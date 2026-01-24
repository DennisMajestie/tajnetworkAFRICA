import { Routes } from '@angular/router';
import { DynamicPageComponent } from './features/page/dynamic-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DynamicPageComponent
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'service-detail',
        redirectTo: 'services',
        pathMatch: 'full'
    },
    {
        path: 'training',
        loadComponent: () => import('./pages/training/training.component').then(m => m.TrainingComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'training-detail/:id',
        loadComponent: () => import('./pages/training-detail/training-detail.component').then(m => m.TrainingDetailComponent)
    },
    {
        path: 'service-detail/:id',
        loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'registration-not-found',
        loadComponent: () => import('./pages/status/registration-not-found/registration-not-found.component').then(m => m.RegistrationNotFoundComponent)
    },
    {
        path: 'network-latency',
        loadComponent: () => import('./pages/status/network-status/network-status.component').then(m => m.NetworkStatusComponent)
    },
    {
        path: 'not-found',
        loadComponent: () => import('./pages/status/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: ':slug',
        component: DynamicPageComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
