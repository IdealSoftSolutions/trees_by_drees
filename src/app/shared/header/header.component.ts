import { Component, ViewChild, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Add for responsive

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule],
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
        label: 'About',
        link: '#',
        subMenu: [
          { label: 'About ArborMaster', link: '/about-arbormaster' },
          { label: 'Message From President', link: '/message-from-president' },
          { label: 'Our History', link: '/our-history' },
          { label: 'Testimonials', link: '/testimonials' }
        ]
      },
      {
        label: 'Education & Training',
        link: '#',
        subMenu: [
          { label: 'Types of Training', link: '/types-of-training' },
          { label: 'Private On Site', link: '/private-on-site' },
          {
            label: 'Open Enrollment',
            link: '#',
            subMenu: [
              { label: 'FAQ', link: '/FAQ' },
              { label: 'Registration Information', link: '/registration-information' },
              { label: 'Gallery', link: '/gallery' },
              { label: 'Course Schedule / Locations & Where To Stay', link: '/course-schedule-locations-and-where-to-stay' }
            ]
          },
          { label: 'Beyond Training', link: '/beyond-training' }
        ]
      },
      {
        label: 'Who We Serve',
        link: '/who-we-serve',
        subMenu: [
          { label: 'Utility', link: '/utility-and-utility-line-clearance' },
          { label: 'Government & Military', link: '/government-local-state-and-federal' },
          { label: 'Commercial & Residential', link: '/commercial-and-residential' }
        ]
      },
      { label: 'Partners', link: '/partners', subMenu: [] },
      { label: 'News', link: '/news', subMenu: [] },
      { label: 'Blog', link: '/blog', subMenu: [] }
    ]
  };

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // Detect mobile view and update `mobileQuery`
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.mobileQuery = result.matches ? window.matchMedia('(max-width: 600px)') : window.matchMedia('(min-width: 600px)');
    });
  }

  openMenu() {
    this.menuTrigger.openMenu();
  }

  closeMenu() {
    this.menuTrigger.closeMenu();
  }
}
