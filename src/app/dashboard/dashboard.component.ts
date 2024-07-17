import { Component, OnInit, inject } from '@angular/core';
import { Chart } from 'chart.js';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Overall Trand', cols: 2, rows: 1 },
        { title: 'Section 1', cols: 1, rows: 2 },
        { title: 'Section 2', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 },
      ];
    })
  );
}

// export class DashboardComponent implements OnInit {
//   selectedYear = 2024;
//   selectedView = 'Yearly';
//   years = [2024, 2023, 2022, 2021];
//   views = ['Yearly', 'Monthly'];
//   sections = [
//     { id: 1, srrValue: 0, score: 15, maxScore: 15 },
//     { id: 2, srrValue: 0, score: 15, maxScore: 15 },
//   ];

//   constructor() {}

//   ngOnInit(): void {
//     if (typeof document !== 'undefined') {
//       this.initializeChart();
//     }
//   }

//   initializeChart() {
//     const ctx = document.getElementById('trendChart') as HTMLCanvasElement;
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: [
//           'January',
//           'February',
//           'March',
//           'April',
//           'May',
//           'June',
//           'July',
//           'August',
//           'September',
//           'October',
//           'November',
//           'December',
//         ],
//         datasets: [
//           {
//             label: 'Active Users',
//             data: [0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0], // Example data
//             backgroundColor: 'rgba(0, 123, 255, 0.5)',
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }

//   applyFilters() {
//     // Logic to filter data based on selected year and view
//   }
// }
