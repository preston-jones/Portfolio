import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmailErrorComponent } from './dialog-email-error.component';

describe('DialogEmailErrorComponent', () => {
  let component: DialogEmailErrorComponent;
  let fixture: ComponentFixture<DialogEmailErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEmailErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEmailErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
