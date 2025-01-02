import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule], // Include RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fix typo
  standalone: true, // If you're using standalone components
})
export class AppComponent {
  title = 'arborist-training';
}
