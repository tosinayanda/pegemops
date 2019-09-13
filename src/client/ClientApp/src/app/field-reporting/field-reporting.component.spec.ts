import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldReportingComponent } from './field-reporting.component';

describe('FieldReportingComponent', () => {
  let component: FieldReportingComponent;
  let fixture: ComponentFixture<FieldReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
