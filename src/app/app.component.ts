import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ FooterComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent  {
  title = 'trees-by-drees';



}

