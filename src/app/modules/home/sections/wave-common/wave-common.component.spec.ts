import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveCommonComponent } from './wave-common.component';

describe('WaveCommonComponent', () => {
  let component: WaveCommonComponent;
  let fixture: ComponentFixture<WaveCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
