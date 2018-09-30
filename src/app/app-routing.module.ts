import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
