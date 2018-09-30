import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service'; 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  data: any;
  pieChartLabels:string[] = ['Desktop', 'iOS', 'Android'];
  pieCharColors:any = [{ backgroundColor: ['#1a89ff', '#80bdfe', '#b4d7ff']}]
  pieChartData:number[];
  pieChartType:string = 'pie';

  constructor(public generalService: GeneralService ) { }

  ngOnInit() {
    this.generalService.data$.subscribe(data => {
      this.data = data;   
      this.pieChartData = [this.data.data.users_by_device_graph.desktop, this.data.data.users_by_device_graph.iOS, this.data.data.users_by_device_graph.Android]
    });
  }

}
