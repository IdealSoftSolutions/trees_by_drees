import { Component, ViewChild, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Add for responsive
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule,MatListModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Corrected here
})
export class HeaderComponent implements OnInit {
  mobileQuery !: MediaQueryList;

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  showFiller = false;

  headerData = {
    logoUrl: 'assets/images/logo.jpg',
    contactLink: '/contact',
    menu: [
      { label: 'Home', link: '/', subMenu: [] },
      {
        label: 'Enroll Now',
        link: '/enroll',
       
      },
     
      {
        label: 'Get a Quote',
        link: '/getQuote',
      },
      {
        label:'Shop',
        link:'https://ipchfv-gg.myshopify.com/'
      }
    ]
  };

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // Detect mobile view and update `mobileQuery`
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.mobileQuery = result.matches ? window.matchMedia('(max-width: 600px)') : window.matchMedia('(min-width: 600px)');
    });
  }

  openExternalSite(url: string) {
    window.open(url, '_blank'); // Opens in a new tab
  }

  openMenu() {
    this.menuTrigger.openMenu();
  }

  closeMenu() {
    this.menuTrigger.closeMenu();
  }
}
