import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SeoMetadata {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly defaultMetadata: SeoMetadata = {
        title: 'Taj Network Africa - Where Creativity Meets Strategy',
        description: 'Transform your business with our innovative tech solutions and expert mentorship programs. We offer IT consultancy, software development, cloud computing, cybersecurity, and more.',
        keywords: 'Tech Solutions Provider, Technology Consultancy Services, Software Development and Mentorship, IT Solutions for Businesses, Mentorship Programs for Technology Enthusiasts, Cloud Computing and IT Solutions, Data Analytics and Digital Insights, Custom Software and App Development, Cybersecurity and Digital Protection Services, AI-Powered Tech Solutions',
        image: 'assets/images/favicons/favicon.png',
        url: 'https://tajnetworkafrica.com/',
        type: 'website',
        author: 'Chukwu Leo G.'
    };

    constructor(
        private titleService: Title,
        private metaService: Meta,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    updateMetadata(metadata: SeoMetadata): void {
        const data = { ...this.defaultMetadata, ...metadata };

        // Set Page Title
        if (data.title) {
            this.titleService.setTitle(data.title);
        }

        // Standard Meta Tags
        this.updateTag('description', data.description);
        this.updateTag('keywords', data.keywords);
        this.updateTag('author', data.author);

        // Open Graph
        this.updateProperty('og:title', data.title);
        this.updateProperty('og:description', data.description);
        this.updateProperty('og:image', data.image);
        this.updateProperty('og:url', data.url);
        this.updateProperty('og:type', data.type);

        // Twitter Card
        this.updateTag('twitter:card', 'summary_large_image');
        this.updateTag('twitter:title', data.title);
        this.updateTag('twitter:description', data.description);
        this.updateTag('twitter:image', data.image);

        // Canonical Link (Only in browser)
        if (isPlatformBrowser(this.platformId) && data.url) {
            this.updateCanonicalLink(data.url);
        }
    }

    private updateTag(name: string, content?: string): void {
        if (content) {
            this.metaService.updateTag({ name, content });
        }
    }

    private updateProperty(property: string, content?: string): void {
        if (content) {
            this.metaService.updateTag({ property, content });
        }
    }

    private updateCanonicalLink(url: string): void {
        let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}
