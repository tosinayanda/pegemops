import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FieldReportingComponent } from './field-reporting.component';

@NgModule({
  declarations: [FieldReportingComponent],
  exports: [FieldReportingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'fieldreport',component:FieldReportingComponent}
    ])
  ],
  providers:[]
})
export class FieldReportingModule { }
