import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  data: any;
  constructor(public generalService: GeneralService) {
    this.generalService.data$.subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token'); 
    location.reload();
  }

}
