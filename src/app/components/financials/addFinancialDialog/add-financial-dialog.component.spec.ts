import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialDialogComponent } from './add-financial-dialog.component';

describe('AddFinancialDialogComponent', () => {
  let component: AddFinancialDialogComponent;
  let fixture: ComponentFixture<AddFinancialDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinancialDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinancialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
