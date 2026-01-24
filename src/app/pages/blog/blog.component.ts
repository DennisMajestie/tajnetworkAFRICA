import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogDataService } from '../../services/blog-data.service';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, ServicesIntroComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blog: any;

  constructor(public generalDetails: BlogDataService) {
    this.blog = this.generalDetails.newData();
  }



}
