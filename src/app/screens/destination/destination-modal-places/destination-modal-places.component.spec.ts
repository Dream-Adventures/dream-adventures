import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationModalPlacesComponent } from './destination-modal-places.component';

describe('DestinationModalPlacesComponent', () => {
  let component: DestinationModalPlacesComponent;
  let fixture: ComponentFixture<DestinationModalPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationModalPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationModalPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
