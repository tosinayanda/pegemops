import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FieldReportingModule } from './field-reporting/field-reporting.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      { path:'', component:HomeComponent},
      { path:'dashboard',component:DashboardComponent},
      {path:'fieldreport',loadChildren: './field-reporting/field-reporting.module#FieldReportingModule'},
      { path:'**',redirectTo:'404'},
      { path:'404',component:NotFoundComponent}
    ]),
    FieldReportingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
