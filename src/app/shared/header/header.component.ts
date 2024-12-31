import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerData = {
    logoUrl: 'https://irp-cdn.multiscreensite.com/9513fda8/dms3rep/multi/AM_logo_2.svg',
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
}

