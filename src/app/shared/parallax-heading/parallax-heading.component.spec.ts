import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxHeadingComponent } from './parallax-heading.component';

describe('ParallaxHeadingComponent', () => {
  let component: ParallaxHeadingComponent;
  let fixture: ComponentFixture<ParallaxHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallaxHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
