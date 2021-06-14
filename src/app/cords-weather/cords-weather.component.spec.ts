import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordsWeatherComponent } from './cords-weather.component';

describe('CordsWeatherComponent', () => {
  let component: CordsWeatherComponent;
  let fixture: ComponentFixture<CordsWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordsWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
