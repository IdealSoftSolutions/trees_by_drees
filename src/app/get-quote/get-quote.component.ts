import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-get-quote',
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.css'
})
export class GetQuoteFormComponent {
  enrollForm: FormGroup;
  batchDates: string[] = ['January 15, 2025', 'February 10, 2025', 'March 5, 2025'];

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      batch: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      console.log('Form Submitted', this.enrollForm.value);
      alert('Thank you for enrolling!');
    }
  }
}



