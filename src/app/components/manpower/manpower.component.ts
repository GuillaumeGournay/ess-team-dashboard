import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-manpower',
  templateUrl: './manpower.component.html',
  styleUrls: ['./manpower.component.scss']
})
export class ManpowerComponent implements OnInit {

  constructor() { }

  lineChartData: ChartDataSets[] = [
    { data: [4,5,8,12], label: 'Nombre employés' },
  ];

  lineChartLabels: Label[] = ['2017', '2018', '2019', '2020'];

  lineChartOptions = {
    responsive: true,
    legend: {
      display: false //This will do the task
   }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(228, 178, 178, 0.719)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
  }

}
