import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { GetQuoteFormComponent } from './get-quote/get-quote.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'enroll', component: EnrollmentFormComponent },
    { path: 'getQuote', component: GetQuoteFormComponent }
];
