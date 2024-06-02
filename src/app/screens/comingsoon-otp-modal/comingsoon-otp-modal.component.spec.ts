import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingsoonOtpModalComponent } from './comingsoon-otp-modal.component';

describe('ComingsoonOtpModalComponent', () => {
  let component: ComingsoonOtpModalComponent;
  let fixture: ComponentFixture<ComingsoonOtpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingsoonOtpModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComingsoonOtpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
