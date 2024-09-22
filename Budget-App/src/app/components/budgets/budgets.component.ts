import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent {
  public chart: any;

  ngOnInit():void{
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['January','February','March','April','May','June','July','August', 'September','October','November','December'], 
	       datasets: [
          {
            label: "Income",
            data: ['467'],
            backgroundColor: 'orange'
          },
          {
            label: "Expenses",
            data: ['542'],
            backgroundColor: 'lightgreen'
          }  
        ]
      },
      options: {
        aspectRatio:2
      }
      
    });
  }
}
