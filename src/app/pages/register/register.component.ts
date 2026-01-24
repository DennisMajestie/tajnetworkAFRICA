import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingDataService } from '../../services/training-data.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert.service';

import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ServicesIntroComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  bgImage = "assets/images/taj/homeslider/slider2.jpg";

  courseData: any;
  selectedCourseName: string = '';
  preselectedCourseId: number | null = null;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  constructor(
    private trainingService: TrainingDataService,
    private alert: AlertService,
    private route: ActivatedRoute
  ) {
    this.courseData = this.trainingService.courses;
  }

  ngOnInit(): void {
    // Read the course ID from query params
    this.route.queryParams.subscribe(params => {
      if (params['course']) {
        this.preselectedCourseId = +params['course'];

        // Find the training by ID to get its title
        const training = this.trainingService.trainingServices.find(
          t => t.id === this.preselectedCourseId
        );

        if (training) {
          this.selectedCourseName = training.title;

          // Find the matching course value in the dropdown data
          const courseOption = this.courseData.find(
            (c: any) => c.label.toLowerCase().includes(training.title.toLowerCase().split(' ')[0])
          );

          if (courseOption) {
            this.contactForm.patchValue({ course: courseOption.value });
          }
        }
      }
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.alert.alert('Enrollment Submitted Successfully! We will contact you shortly.');
    this.contactForm.reset();
  }

  _search(e: any) {
    // Search handler if needed
  }
}
