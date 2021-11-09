import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraphNumberComponent } from './card-graph-number.component';

describe('CardGraphNumberComponent', () => {
  let component: CardGraphNumberComponent;
  let fixture: ComponentFixture<CardGraphNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraphNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGraphNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
