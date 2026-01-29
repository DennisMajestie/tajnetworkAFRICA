import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { TrainingDataService } from '../../services/training-data.service';
import { CommonModule } from '@angular/common';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

@Component({
  selector: 'app-training-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ServicesIntroComponent],
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss']
})
export class TrainingDetailComponent {


  trainingId: any;
  trainingContent: any;
  content: any;
  servicePayload: any = {};
  bgImage = "assets/images/taj/homeslider/slider6.jpg";
  tel: number = 2348029824786;
  courseSelected: any;

  constructor(private route: ActivatedRoute, private training: TrainingDataService) {
    this.content = this.training.trainingServices
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.trainingId = this.route.snapshot.params['id'];
    this.servicePayload = { trainingId: this.trainingId };
    this.trainingContent = this.content.find((item: { id: any; }) => item.id == this.trainingId);
    if (this.trainingContent && this.trainingContent.images) {
      this.bgImage = this.trainingContent.images;
    }
  }



}
