import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishDialogComponent } from './fish-dialog.component';

describe('FishDialogComponent', () => {
  let component: FishDialogComponent;
  let fixture: ComponentFixture<FishDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
