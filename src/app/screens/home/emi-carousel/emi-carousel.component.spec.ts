import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCarouselComponent } from './emi-carousel.component';

describe('EmiCarouselComponent', () => {
  let component: EmiCarouselComponent;
  let fixture: ComponentFixture<EmiCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmiCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
