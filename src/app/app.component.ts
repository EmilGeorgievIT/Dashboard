import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  name = "Emil";
  chart : any;
  
  constructor() {
   }
  
  ngOnInit() {
  	this.chart = new Chart('chart', {
          type: 'line',
          data: {
            labels: ['a','b','c'],
            datasets: [
              {
                data: ['12','33'],
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: ['23','33'],
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
