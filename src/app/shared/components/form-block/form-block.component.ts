import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig, FormField } from '../../../core/models/types';
import { ContentService } from '../../../core/services/content.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-form-block',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="form-section">
      <div class="container container--narrow">
        <div class="form-glass">
          <header class="form-header" *ngIf="data.title || data.description">
            <h2 class="form-title" *ngIf="data.title">{{ data.title }}</h2>
            <p class="form-subtitle" *ngIf="data.description">{{ data.description }}</p>
          </header>

          <form [formGroup]="dynamicForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-grid">
              <div *ngFor="let field of data.fields" 
                   class="form-group"
                   [class.form-group--half]="field.width === 'half'"
                   [class.form-group--full]="field.width !== 'half'">
                
                <label [for]="field.name" class="form-label">
                  {{ field.label }}
                  <span *ngIf="field.required" class="required">*</span>
                </label>

                <!-- Input Types -->
                <ng-container [ngSwitch]="field.type">
                  
                  <textarea *ngSwitchCase="'textarea'"
                            [id]="field.name"
                            [formControlName]="field.name"
                            [placeholder]="field.placeholder || ''"
                            [rows]="field.rows || 4"
                            class="form-control"></textarea>

                  <select *ngSwitchCase="'select'"
                          [id]="field.name"
                          [formControlName]="field.name"
                          class="form-control">
                    <option value="" disabled selected>{{ field.placeholder || 'Select an option' }}</option>
                    <option *ngFor="let opt of $any(field.options)" [value]="isString(opt) ? opt : opt.value">
                      {{ isString(opt) ? opt : opt.label }}
                    </option>
                  </select>

                  <div *ngSwitchCase="'checkbox'" class="checkbox-group">
                    <input type="checkbox" [id]="field.name" [formControlName]="field.name">
                    <label [for]="field.name">{{ field.placeholder || 'I agree to the terms' }}</label>
                  </div>

                  <input *ngSwitchDefault
                         [type]="field.type"
                         [id]="field.name"
                         [formControlName]="field.name"
                         [placeholder]="field.placeholder || ''"
                         class="form-control">
                </ng-container>

                <!-- Validation Errors -->
                <div class="error-msg" *ngIf="isInvalid(field.name)">
                  <span *ngIf="dynamicForm.get(field.name)?.errors?.['required']">This field is required</span>
                  <span *ngIf="dynamicForm.get(field.name)?.errors?.['email']">Please enter a valid email</span>
                  <span *ngIf="dynamicForm.get(field.name)?.errors?.['pattern']">Invalid format</span>
                </div>
              </div>
            </div>

            <div class="form-footer">
              <button type="submit" 
                      class="btn-primary form-submit" 
                      [disabled]="dynamicForm.invalid || submitting">
                <span *ngIf="!submitting">{{ data.submitText || 'Send Message' }}</span>
                <span *ngIf="submitting" class="loader-inline"></span>
                <i *ngIf="!submitting" class="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </div>

            <!-- Messages -->
            <div class="status-msg success" *ngIf="submitSuccess">
              <i class="fa-solid fa-circle-check"></i>
              {{ data.successMessage || 'Thank you! Your message has been sent.' }}
            </div>
            <div class="status-msg error" *ngIf="submitError">
              <i class="fa-solid fa-circle-exclamation"></i>
              Something went wrong. Please try again.
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .form-section { padding: 100px 0; background: var(--color-primary-dark); }
    .container--narrow { max-width: 800px; }
    
    .form-glass {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 2rem;
      padding: 3rem;
      backdrop-filter: blur(20px);
      box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
      
      @media (max-width: 640px) { padding: 2rem; }
    }

    .form-header { text-align: center; margin-bottom: 3rem; }
    .form-title { font-size: 2.5rem; font-weight: 800; font-family: var(--font-display); margin-bottom: 1rem; }
    .form-subtitle { color: var(--color-neutral-darkGray); font-size: 1.125rem; }

    .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .form-group--full { grid-column: span 2; }
    @media (max-width: 640px) { .form-group--half { grid-column: span 2; } }

    .form-label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--color-neutral-mediumGray); margin-bottom: 0.5rem; }
    .required { color: #f87171; margin-left: 0.25rem; }

    .form-control {
      width: 100%; padding: 1.25rem 1.5rem; background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px;
      color: white; font-family: inherit; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:focus {
        outline: none; border-color: var(--color-accent-blue);
        background: rgba(255, 255, 255, 0.06); 
        box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.15);
      }
    }

    .checkbox-group { display: flex; align-items: center; gap: 0.75rem; color: var(--color-neutral-mediumGray); }

    .error-msg { font-size: 0.75rem; color: #f87171; margin-top: 0.5rem; }

    .form-footer { margin-top: 2.5rem; text-align: center; }
    .form-submit { 
      width: 100%; justify-content: center; font-size: 1.125rem; padding: 1.25rem; 
      border-radius: 16px;
      background: #ffffff !important;
      color: #004a78 !important;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      
      &:hover:not(:disabled) {
        background: #f8faff !important;
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      }
    }

    .status-msg {
      margin-top: 2rem; padding: 1.25rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;
      &.success { background: rgba(0, 102, 255, 0.1); color: var(--color-accent-blue); border: 1px solid rgba(0, 102, 255, 0.2); }
      &.error { background: rgba(239, 68, 68, 0.1); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.2); }
    }

    .loader-inline {
      width: 20px; height: 20px; border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white; border-radius: 50%; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class FormBlockComponent implements OnInit {
  @Input() data!: FormConfig;
  dynamicForm!: FormGroup;
  submitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    if (this.data?.formRef) {
      this.contentService.getContent<FormField[]>(`forms.${this.data.formRef}`)
        .pipe(take(1))
        .subscribe(fields => {
          if (fields) {
            this.data.fields = fields;
            this.initForm();
          }
        });
    } else {
      this.initForm();
    }
  }

  private initForm(): void {
    const group: any = {};
    if (this.data && this.data.fields) {
      this.data.fields.forEach(field => {
        const validators = [];
        if (field.required) validators.push(Validators.required);
        if (field.type === 'email') validators.push(Validators.email);
        if (field.validation?.pattern) validators.push(Validators.pattern(field.validation.pattern));
        if (field.validation?.minLength) validators.push(Validators.minLength(field.validation.minLength));
        if (field.validation?.maxLength) validators.push(Validators.maxLength(field.validation.maxLength));

        group[field.name] = ['', validators];
      });
    }
    this.dynamicForm = this.fb.group(group);
  }

  isInvalid(name: string): boolean {
    const control = this.dynamicForm.get(name);
    return !!(control && control.invalid && control.touched);
  }

  isString(val: any): boolean {
    return typeof val === 'string';
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.submitting = true;
      this.submitError = false;
      this.submitSuccess = false;

      setTimeout(() => {
        this.submitting = false;
        this.submitSuccess = true;
        this.dynamicForm.reset();
        setTimeout(() => this.submitSuccess = false, 5000);
      }, 2000);
    } else {
      this.dynamicForm.markAllAsTouched();
    }
  }
}
