import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficeTypeComponent } from './add-office-type.component';

describe('AddOfficeTypeComponent', () => {
  let component: AddOfficeTypeComponent;
  let fixture: ComponentFixture<AddOfficeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfficeTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfficeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
