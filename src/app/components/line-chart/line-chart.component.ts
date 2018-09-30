import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service'; 

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  data: any; 
  lineChartData: Array<any>
  lineChartLabels: Array<any> = [1, 7, 14, 21, 28];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      borderColor: '#007bff',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(241, 53, 166, 0.2)',
      borderColor: '#f135a6',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  constructor(public generalService: GeneralService ) {
    this.generalService.data$.subscribe(data => {
      this.data = data; 
      this.lineChartData = [
        { data: this.data.data.users_data_graph.current_month_data, label: "Current Month" },
        { data: this.data.data.users_data_graph.past_month_data, label: "Past Month" }
      ]; 
    });
  }

  ngOnInit() {
  }

}
