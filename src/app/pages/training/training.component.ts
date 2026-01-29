import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrainingDataService } from '../../services/training-data.service';
import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, RouterModule, ServicesIntroComponent],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  introImage = "assets/images/taj/homeslider/slider5.jpg";
  trainingCourses: any[] = [];


  constructor(private trainingService: TrainingDataService) { }

  ngOnInit(): void {
    this.trainingCourses = this.trainingService.trainingServices || [];
  }
}
