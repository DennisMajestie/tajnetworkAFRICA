import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingDataService } from '../../services/training-data.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import Swal from 'sweetalert2';

import { ServicesIntroComponent } from '../../shared/components/services-intro/services-intro.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ServicesIntroComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
    private route: ActivatedRoute,
    private router: Router
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

          if (training.courseValue) {
            this.contactForm.patchValue({ course: training.courseValue });
          }
        }
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Registration Form Payload:', this.contactForm.value);

      Swal.fire({
        title: 'Enrollment Successful!',
        text: 'Your registration has been received. Redirecting to home...',
        icon: 'success',
        iconColor: '#00d084',
        background: '#ffffff',
        confirmButtonColor: '#004a78',
        customClass: {
          popup: 'swal-taj-popup',
          title: 'swal-taj-title'
        },
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        willClose: () => {
          this.router.navigate(['/']);
        }
      });

      this.contactForm.reset();
    }
  }

  _search(e: any) {
    // Search handler if needed
  }
}
