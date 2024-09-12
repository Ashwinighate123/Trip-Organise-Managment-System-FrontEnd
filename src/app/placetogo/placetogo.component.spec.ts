import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacetogoComponent } from './placetogo.component';

describe('PlacetogoComponent', () => {
  let component: PlacetogoComponent;
  let fixture: ComponentFixture<PlacetogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacetogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacetogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
