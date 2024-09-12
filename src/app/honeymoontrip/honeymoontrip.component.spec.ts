import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoontripComponent } from './honeymoontrip.component';

describe('HoneymoontripComponent', () => {
  let component: HoneymoontripComponent;
  let fixture: ComponentFixture<HoneymoontripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoneymoontripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoneymoontripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
