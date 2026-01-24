import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-subsidiaries',
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './subsidiaries.component.html',
  styleUrl: './subsidiaries.component.scss'
})
export class SubsidiariesComponent {

  bgImage = "assets/images/taj/homeslider/slider4.jpg"


  ServiceOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        margin: 20
        
      },
      400: {
        items: 2,
        margin: 20

      },
      740: {
        items: 3,
        margin: 20

      },
      940: {
        items: 3,
        margin: 20

      }
    },
    nav: true
  }


  subsidiaries = [
    {id: 1, 
      service: 'TechBound Mentorship', 
      img:'assets/images/taj/service-details/mentorship2.jpg', 
      text: "Empowering the next generation of tech innovators through", 
      text2: "personalized mentorship and hands-on learning",
      link: "https://student.techbound.ng/"
    },
    {id: 1, 
      service: 'TechBound Mentorship', 
      img:'assets/images/taj/service-details/mentorship2.jpg', 
      text: "Empowering the next generation of tech innovators through", 
      text2: "personalized mentorship and hands-on learning",
      link: "https://student.techbound.ng/"
    },
    {id: 1, 
      service: 'TechBound Mentorship', 
      img:'assets/images/taj/service-details/mentorship2.jpg', 
      text: "Empowering the next generation of tech innovators through", 
      text2: "personalized mentorship and hands-on learning",
      link: "https://student.techbound.ng/"
    },
      
   
  ]


  ngOnInit(): void {
    window.scrollTo(0, 0);

  }
 
}
