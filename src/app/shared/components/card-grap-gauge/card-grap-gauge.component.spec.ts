import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGrapGaugeComponent } from './card-grap-gauge.component';

describe('CardGrapGaugeComponent', () => {
  let component: CardGrapGaugeComponent;
  let fixture: ComponentFixture<CardGrapGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGrapGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGrapGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
