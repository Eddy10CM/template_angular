import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGrapFooterComponent } from './card-grap-footer.component';

describe('CardGrapFooterComponent', () => {
  let component: CardGrapFooterComponent;
  let fixture: ComponentFixture<CardGrapFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGrapFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGrapFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
