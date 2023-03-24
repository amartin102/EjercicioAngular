import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceActorComponent } from './indice-actor.component';

describe('IndiceActorComponent', () => {
  let component: IndiceActorComponent;
  let fixture: ComponentFixture<IndiceActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
