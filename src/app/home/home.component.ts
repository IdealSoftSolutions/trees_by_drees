import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from "../shared/header/header.component";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, HeaderComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

}
