import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceInformationComponent } from './space-information.component';

describe('SpaceInformationComponent', () => {
  let component: SpaceInformationComponent;
  let fixture: ComponentFixture<SpaceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
