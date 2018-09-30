import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
//
import { AppRoutingModule } from './/app-routing.module';
import { MatSnackBarModule, MatToolbarModule, MatGridListModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatSelectModule, MatCardModule, MatStepperModule, MatInputModule, MatCheckboxModule, MatTooltipModule, MatSlideToggleModule, MatExpansionModule, MatDialogModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule, MAT_DATE_LOCALE, } from '@angular/material';
import { AppComponent } from './app.component';
import { GeneralService } from './services/general.service';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ReferralsComponent } from './components/referrals/referrals.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    ToolbarComponent,
    LineChartComponent,
    TimeAgoPipe,
    PieChartComponent, DiscussionsComponent, ReferralsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    MatGridListModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatSelectModule, MatCardModule, MatStepperModule, MatInputModule, MatCheckboxModule, MatTooltipModule, MatSlideToggleModule, MatExpansionModule, MatDialogModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule,
  ],
  providers: [
    GeneralService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
