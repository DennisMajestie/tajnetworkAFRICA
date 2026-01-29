import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogDataService } from '../../services/blog-data.service';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  blogData: any;
  blogId: any;
  blogContent: any
  blogPayload: any = {};

  constructor(public blogDetail: BlogDataService, private route: ActivatedRoute) {
    this.blogData = this.blogDetail.newData();
  }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.blogId = this.route.snapshot.params['id'];
    this.blogPayload = { blogId: this.blogId };
    this.blogContent = this.blogData.find((item: { id: any; }) => item.id == this.blogId);
  }



}
