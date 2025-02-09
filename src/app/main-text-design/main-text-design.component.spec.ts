import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTextDesignComponent } from './main-text-design.component';

describe('MainTextDesignComponent', () => {
  let component: MainTextDesignComponent;
  let fixture: ComponentFixture<MainTextDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTextDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTextDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
