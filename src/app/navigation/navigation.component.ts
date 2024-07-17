import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  selectedItem: string | null = null; // Property to store the selected item

  // Example data for main links and their sub-links
  mainLinks = [
    {
      title: 'Home',
      subLinks: ['Dashboard', 'Profile', 'Settings'],
    },
    {
      title: 'Performance',
      subLinks: [
        'View Monthely Report',
        'SRR View',
        'Upload/Export Monthly Files',
        'KPI Settings',
        'Master',
      ],
    },
    {
      title: 'Process',
      subLinks: ['Workflow', 'Automation', 'Documentation'],
    },
    {
      title: 'Quality',
      subLinks: ['Standards', 'Audits', 'Improvements'],
    },
    {
      title: 'People',
      subLinks: ['Team', 'Contacts', 'HR'],
    },
    {
      title: 'Projects',
      subLinks: ['Current', 'Completed', 'Archived'],
    },
    {
      title: 'KYS',
      subLinks: ['Know Your System', 'Integration', 'Security'],
    },
  ];

  // Method to handle main link selection
  selectMainLink(link: string): void {
    this.selectedItem = this.selectedItem === link ? null : link; // Toggle selection
  }
}
