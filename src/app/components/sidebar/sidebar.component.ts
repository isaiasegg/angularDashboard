import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  data: any;
  selectedItem: any;

  constructor(public generalService: GeneralService) {
    this.generalService.data$.subscribe(data => {
      this.data = data;
      this.selectedItem = this.data.data.sections[0];
    });
  }

  ngOnInit() {
  }

  onSelect(item) { this.selectedItem = item; }

  getIcon(item) {
    switch (item) {
      case 1:
        return 'edit'; 
      case 2:
        return 'list';
      case 3:
        return 'library_add';
      case 4:
        return 'view_comfy';
      case 5:
        return 'waves';
      case 6:
        return 'account_circle';
      case 7:
        return 'info';
    }
  }

}
