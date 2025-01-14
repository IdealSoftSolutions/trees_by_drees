import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-get-quote',
  imports: [CommonModule,MatFormFieldModule, MatRadioModule,MatSelectModule, ReactiveFormsModule, MatInputModule,MatButtonModule,MatIconModule, NgxMaskDirective],
  providers: [
    provideNgxMask(),
],
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.css'
})
export class GetQuoteFormComponent {
  getAQuoteForm !: FormGroup;
  batchDates: string[] = ['January 15, 2025', 'February 10, 2025', 'March 5, 2025'];
  serviceList:string[]=['Tree Trimming','Tree Removal','Arborist Consultation','Stump Grinding','Storm Removal']
  submitted=false;

  get form(){
    return this.getAQuoteForm.controls;
  }

  constructor(private fb: FormBuilder) {
    this.getAQuoteForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,8}$')]],
      phone: ['', Validators.required],
      service: [''],
      description: [''],
      address:this.fb.group({
        house_no:[],
        city:[{value:'Saint Louis',disabled: true} ],
        state:[{value:'Missouri',disabled:true}],
        zipcode:[]
      })
    });
  }

  numericOnly(event: { key: string; }) {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  onSubmit(): void {
    this.submitted=true;
    console.log('Form Submitted', this.getAQuoteForm.value);
    if (this.getAQuoteForm.valid) {
      console.log('Form Submitted', this.getAQuoteForm.value);
      alert('Thank you for enrolling!');
    }
  }
}



