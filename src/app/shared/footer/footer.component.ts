import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerdata = {
    logoUrl: 'assets/images/logo.jpg',
    background_image: 'assets/images/background-image.jpg'
  }
}
