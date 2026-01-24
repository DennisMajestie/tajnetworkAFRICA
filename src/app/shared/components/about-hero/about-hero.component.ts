import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TabItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  active: boolean;
}

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.scss'
})
export class AboutHeroComponent implements OnInit {
  tabs: TabItem[] = [
    {
      id: 'about',
      num: '01',
      title: 'About Us',
      desc: 'TAJ Network Africa is a premier technology group dedicated to transforming the African digital landscape through innovative software solutions.',
      active: true
    },
    {
      id: 'mission',
      num: '02',
      title: 'Our Mission',
      desc: 'To empower businesses and individuals across Africa by providing cutting-edge technological solutions and professional mentorship.',
      active: false
    },
    {
      id: 'vision',
      num: '03',
      title: 'Our Vision',
      desc: 'To be the leading catalyst for digital transformation in Africa, fostering a future where technology drives sustainable growth for all.',
      active: false
    }
  ];

  ngOnInit(): void { }

  setActiveTab(tab: TabItem): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }
}
