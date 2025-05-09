import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaComponent } from './aba.component';

describe('AbaComponent', () => {
  let component: AbaComponent;
  let fixture: ComponentFixture<AbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
