import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: any = {}; 
  response: any;
  errMsg: string; 
  disableButton: boolean; 

  constructor(public generalService: GeneralService, private router: Router) {
    if (localStorage.getItem('token')) { this.router.navigate(['']); }
  }

  ngOnInit() {

  }

  loginFn() {
    if (this.userModel.email && this.userModel.password) {
      this.disableButton = true;
      this.generalService.login(this.userModel).subscribe(data => {
        this.response = data;
        if (!this.response.msg) {
          localStorage.setItem('token', this.response.token);
          this.errMsg = undefined;
          location.reload();
        } else {
          this.disableButton = false;
          this.errMsg = this.response.msg;
        }
      });
    } else {
      this.errMsg = 'Llena todos los campos';
    }
  }

}
