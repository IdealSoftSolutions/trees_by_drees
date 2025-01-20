import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-enrollment-form',
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxMaskDirective,
    HeaderComponent
  ],
  providers: [provideNgxMask()],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  enrollForm!: FormGroup;
  batchDates: string[] = ['January 15, 2025', 'February 10, 2025', 'March 5, 2025'];
  serviceList: string[] = ['Tree Trimming', 'Tree Removal', 'Arborist Consultation', 'Stump Grinding', 'Storm Removal'];
  submitted = false;

  get form() {
    return this.enrollForm.controls;
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.enrollForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,8}$')]],
      phone: ['', Validators.required],
    });
  }

  numericOnly(event: { key: string }) {
    const patt = /^[0-9]$/;
    return patt.test(event.key);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.enrollForm.valid) {
      console.log('Form Submitted', this.enrollForm.value);

      // Updated API URL pointing to the backend server
      this.http.post('http://localhost:3000/api/send-email', this.enrollForm.value)
        .subscribe({
          next: (response) => {
            alert('Thank you for enrolling! A confirmation email has been sent.');
          },
          error: (err) => {
            console.error('Error sending email:', err);
            alert('Failed to send the email. Please try again later.');
          }
        });
    }
  }

}