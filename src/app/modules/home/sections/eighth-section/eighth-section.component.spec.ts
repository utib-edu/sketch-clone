import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthSectionComponent } from './eighth-section.component';

describe('EighthSectionComponent', () => {
  let component: EighthSectionComponent;
  let fixture: ComponentFixture<EighthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
