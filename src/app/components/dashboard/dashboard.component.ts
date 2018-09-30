import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //
  data: any; 
  //
  constructor(public generalService: GeneralService, private router: Router) {
    if (!localStorage.getItem('token')) { this.router.navigate(['login']); }
    //
    this.generalService.getData().subscribe((data) => {
      this.data = data;
      //
      this.generalService.changeData(this.data);
    });

  }

  ngOnInit() { }

}
