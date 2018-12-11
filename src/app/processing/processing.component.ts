import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {
  chartLine: any;
  constructor() { }

  ngOnInit() {
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
