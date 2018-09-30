import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service'; 

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent implements OnInit {
  data: any;
  constructor(public generalService: GeneralService) {
    this.generalService.data$.subscribe(data => {
      this.data = data; 
    })
  }

  ngOnInit() {
  }

}
