import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service'; 

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit {
  data: any;
  buttons: any = [
    { name: 'Approve', icon: 'close', color: '#29e129' },
    { name: 'Reject', icon: 'close', color: 'red' },
    { name: 'Edit', icon: 'close', color: 'gray' }
  ]
  constructor(public generalService: GeneralService) {
    this.generalService.data$.subscribe(data => {
      this.data = data; 
    })
  }

  ngOnInit() {
  }

}
