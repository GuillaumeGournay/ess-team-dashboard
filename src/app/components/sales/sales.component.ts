import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor() { }
  
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false //This will do the task
   }
  };
  public radarChartLabels: Label[] = ['Ecommerce', 'Site vitrine', 'SEO',
    'Audit qualité', 'Emailing'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis' }
  ];
  public radarChartType: ChartType = 'radar';

  ngOnInit(): void {
  }

}
