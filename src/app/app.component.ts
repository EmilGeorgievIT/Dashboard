import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  name = "Emil";
  chart: any;
  chartLine: any;
  constructor() {
  }

  ngOnInit() {
    this.chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: ['1', '3', '2', '5', '5', '9'],
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })

    this.chartLine = new Chart('chartLine', {
      type: 'bar',
      data: {
        labels: ['In progress', 'Pending', 'Finished'],
        datasets: [
          {
            data: ['12', '12', '2'],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: ['23', '12', '22'],
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })
  }
}
