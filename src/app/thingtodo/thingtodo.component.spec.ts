import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingtodoComponent } from './thingtodo.component';

describe('ThingtodoComponent', () => {
  let component: ThingtodoComponent;
  let fixture: ComponentFixture<ThingtodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingtodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThingtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
