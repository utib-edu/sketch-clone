import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivethSectionComponent } from './fiveth-section.component';

describe('FivethSectionComponent', () => {
  let component: FivethSectionComponent;
  let fixture: ComponentFixture<FivethSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivethSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivethSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
