import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagingPageComponent } from './laging-page.component';

describe('LagingPageComponent', () => {
  let component: LagingPageComponent;
  let fixture: ComponentFixture<LagingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
