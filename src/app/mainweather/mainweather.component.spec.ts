import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainweatherComponent } from './mainweather.component';

describe('MainweatherComponent', () => {
  let component: MainweatherComponent;
  let fixture: ComponentFixture<MainweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
